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

        '3xl': '1536px',
        '2.5xl': '1470px',
        '2.3xl': '1430px',
        '2xl': '1434px',
        '1.5xl': '1306px',
        'xl': '1280px',

        '1.9lg': '1238px',
        '1.5lg': '1172px',
        '1.3lg': '1050px',
        'lg': '1024px',

        '3md': '976px',
        '2.7md': '900px',
        '2.6md': '722px',
        '2.5md': '700px',
        '1.5md': '710px',
        'md': '672px',

        'sm': '574px',
        'xsm': '538px',
        '0.8xsm': '485px',
        '0.7xsm': '471px',
        '0.5xsm': '468px',
        'xxsm': '400px',
        '0.5xxsm': '350px'

      }
    }
  },
  plugins: []
}
