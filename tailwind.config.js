module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      fontWeight: {
        normal: 300,
        bold: 600,
      },
      colors: {
        dark: {
          DEFAULT: 'var(--dark)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
        },
      },
    },
  },
  plugins: [],
}