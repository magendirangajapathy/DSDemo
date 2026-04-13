const tokens = require('./src/tokens/design-tokens.json')

const fontFamily = tokens?.font?.family
  ? tokens.font.family.split(',').map((s) => s.trim().replace(/^'|'$/g, ''))
  : ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}', './.storybook/**/*.{js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      fontFamily: {
        sans: fontFamily,
      },
    },
  },
  plugins: [],
}
