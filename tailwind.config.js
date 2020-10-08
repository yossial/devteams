const defaultTheme = require('tailwindcss/defaultTheme')

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
      colors: {
        gray: {
          50: '#fbfdfd',
          150: '#f4f7fa',
          750: '#424c5d',
          ...defaultTheme.colors.gray
        },
        red: {
          50: '#fffafa',
          ...defaultTheme.colors.red
        },
        indigo: {
          50: '#f2f7ff',
          ...defaultTheme.colors.indigo
        }
      },
      spacing: {
        '2-5': '0.625rem'
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      backgroundOpacity: {
        '01': '0.1',
        '05': '.05',
        '003': '0.03',
      },
      minHeight: {
        'screen91': '91vh',
      },
      height: {
        "75": "75vh",
        "85": "85vh",
      },

      inset: {
        '10': '10%',
        '20': '20%',
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
        '90': '90%',
      },
      zIndex: {
        '1': 1,
        '99999': 99999
      },
      transitionProperty: {
        'background': 'background-color'
      }
    },
    variants: {
      backgroundColor: ['responsive', 'hover', 'focus'],
      textColor: ['responsive', 'hover', 'focus', 'group-focus', 'focus-within'],
    },
    plugins: [],
  }
}