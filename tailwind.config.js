module.exports = {
  purge: [],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '590px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      display: ["Helvetica", "sans-serif"],
      body: ["Helvetica-Neue", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      }
    },

    extend: {
      height: theme => ({
        "p75": "75vh",
        "p85": "85vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
