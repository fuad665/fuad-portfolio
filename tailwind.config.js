/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        muted: 'rgb(var(--foreground-muted) / <alpha-value>)',
        subtle: 'rgb(var(--foreground-subtle) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover) / <alpha-value>)',
          fg: 'rgb(var(--accent-fg) / <alpha-value>)',
        },
        border: 'rgb(var(--border) / <alpha-value>)',
        'border-subtle': 'rgb(var(--border-subtle) / <alpha-value>)',
        violet: 'rgb(var(--violet) / <alpha-value>)',
        teal: 'rgb(var(--teal) / <alpha-value>)',
        amber: 'rgb(var(--amber) / <alpha-value>)',
        rose: 'rgb(var(--rose) / <alpha-value>)',
        sky: 'rgb(var(--sky) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        heading: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(17, 17, 19, 0.04)',
        'card-hover': '0 1px 2px 0 rgba(17, 17, 19, 0.04), 0 12px 32px -8px rgba(17, 17, 19, 0.12)',
        fab: '0 8px 24px rgba(17, 17, 19, 0.14), 0 0 0 1px rgba(17, 17, 19, 0.06)',
      },
    },
  },
  plugins: [],
};
