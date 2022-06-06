module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        textanime: {
          '0%': { transform: 'translate(-99%, 0%) translate3d(0px,  0px, 0px)' },
          '100%': { transform: 'translate(-2%, 0%) translate3d(0px,  0px, 0px)' },
        }
      },
      animation: {
        'text-animation': 'textanime 4s linear infinite'
      },
    },
    fontFamily: {
      sans: ["NeutralReg"],
      bold: ["NeutralBold"]
    }
  },
  plugins: [],
}
