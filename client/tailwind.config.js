module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        background: '#111827',
        textPrimary: '#FFFFFF',
        textSecondary: '#D1D5DB',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('https://source.unsplash.com/random/1920x1080')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
    },
  },
  plugins: [],
}
