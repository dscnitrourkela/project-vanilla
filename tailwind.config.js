/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          1: '#E7E7E7',
          2: '#FFEEDA',
          3: '#A59480',
          4: '#402E32',
          5: '#1D1D1D'
        },
        black: {
          1: '#151515',
          2: '#1d1d1d'
        },
        white: {
          1: '#EBEBEB'
        },
        orange: {
          1: '#FF8911',
          2: '#FFEEDA'
        }
      },

      boxShadow: {
        button: '3px 3px 0px #FFEEDA',
        events: '5px 5px 0px #1D1D1D'
      },

      fontFamily: {
        Poppins: 'Poppins'
      },
      rounded: {
        '4xl': '4rem'
      },
      screens: {
        '2xl': '1434px',
        '3xl': '1536px',
        xl: '1280px',
        lg: '1024px',
        xsm: '538px',
        md: '672px'
      }
    }
  },
  plugins: []
}
