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
        slate: {
          50: 'var(--color-slate-50)',
          100: 'var(--color-slate-100)',
          200: 'var(--color-slate-200)',
          300: 'var(--color-slate-300)',
          400: 'var(--color-slate-400)',
          500: 'var(--color-slate-500)',
          600: 'var(--color-slate-600)',
          700: 'var(--color-slate-700)',
          800: 'var(--color-slate-800)',
          900: 'var(--color-slate-900)'
        },
        blue: {
          50: 'var(--color-blue-50)',
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
          600: 'var(--color-blue-600)',
          700: 'var(--color-blue-700)',
          800: 'var(--color-blue-800)',
          900: 'var(--color-blue-900)'
        },
        green: {
          50: 'var(--color-green-50)',
          100: 'var(--color-green-100)',
          200: 'var(--color-green-200)',
          300: 'var(--color-green-300)',
          400: 'var(--color-green-400)',
          500: 'var(--color-green-500)',
          600: 'var(--color-green-600)',
          700: 'var(--color-green-700)',
          800: 'var(--color-green-800)',
          900: 'var(--color-green-900)'
        },
        teal: {
          50: 'var(--color-teal-50)',
          100: 'var(--color-teal-100)',
          200: 'var(--color-teal-200)',
          300: 'var(--color-teal-300)',
          400: 'var(--color-teal-400)',
          500: 'var(--color-teal-500)',
          600: 'var(--color-teal-600)',
          700: 'var(--color-teal-700)',
          800: 'var(--color-teal-800)',
          900: 'var(--color-teal-900)'
        },
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
