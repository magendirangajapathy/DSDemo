const fs = require('fs')
const path = require('path')

const stylesPath = '/tmp/figma_styles.json'
const tokensPath = path.join(__dirname, '..', 'src', 'tokens', 'design-tokens.json')
const outPath = path.join(__dirname, '..', 'src', 'tokens', 'figma-style-map.json')

if (!fs.existsSync(stylesPath)) {
  console.error('Missing', stylesPath)
  process.exit(1)
}
if (!fs.existsSync(tokensPath)) {
  console.error('Missing', tokensPath)
  process.exit(1)
}

const styles = JSON.parse(fs.readFileSync(stylesPath, 'utf8'))
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'))
const colorTokens = tokens.color || {}

const synonyms = {
  gray: 'slate',
  grey: 'slate',
  white: 'background',
  black: 'on-surface',
  neutral: 'slate',
  peacock: 'blue',
  velvet: 'teal',
  red: 'destructive',
  primary: 'primary',
  slate: 'slate',
  blue: 'blue',
  green: 'green',
  teal: 'teal',
}

function resolve(group, shade) {
  if (!group) return { hex: colorTokens.primary || null, mappedTo: 'primary' }
  const g = group.toLowerCase()
  if (colorTokens[g]) {
    const val = colorTokens[g]
    if (typeof val === 'string') return { hex: val, mappedTo: g }
    if (typeof val === 'object' && shade && val[shade]) return { hex: val[shade], mappedTo: g }
    if (typeof val === 'object') {
      const prefer = ['400', '500', '300', '200']
      for (const p of prefer) if (val[p]) return { hex: val[p], mappedTo: g }
    }
  }
  if (synonyms[g] && colorTokens[synonyms[g]]) {
    const mappedKey = synonyms[g]
    const val = colorTokens[mappedKey]
    if (typeof val === 'string') return { hex: val, mappedTo: mappedKey }
    if (typeof val === 'object' && shade && val[shade]) return { hex: val[shade], mappedTo: mappedKey }
    if (typeof val === 'object') {
      const prefer = ['400', '500', '300', '200']
      for (const p of prefer) if (val[p]) return { hex: val[p], mappedTo: mappedKey }
    }
  }
  if (colorTokens.primary) return { hex: colorTokens.primary, mappedTo: 'primary' }
  return { hex: null, mappedTo: null }
}

const out = {}
let unmapped = 0
for (const [id, style] of Object.entries(styles)) {
  if (style.styleType !== 'FILL') continue
  const originalName = style.name
  const name = originalName.replace(/^\./, '').trim()
  let group = null
  let shade = null
  if (name.includes('/')) {
    const parts = name.split('/')
    group = parts[0].trim()
    shade = parts[1] && parts[1].trim()
  } else {
    const parts = name.split(' ')
    if (parts.length > 1) {
      group = parts[0].trim()
      shade = parts[1].trim()
    } else {
      group = name
    }
  }
  const resolved = resolve(group, shade)
  if (!resolved.hex) unmapped++
  out[originalName] = {
    id,
    key: style.key,
    styleType: style.styleType,
    hex: resolved.hex,
    mappedTo: resolved.mappedTo || null,
  }
}

fs.writeFileSync(outPath, JSON.stringify(out, null, 2))
console.log('Wrote', outPath, 'styles:', Object.keys(out).length, 'unmapped:', unmapped)
