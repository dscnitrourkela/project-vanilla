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
        },
        green: {
          1: '#D9FC00',
          2: '#CAFC00',
          3: '#9E9E9E'
        },
        blue: {
          1: '#00A1FC'
        }
      },

      boxShadow: {
        button: '3px 3px 0px #FFEEDA',
        events: '5px 5px 0px #1D1D1D',
        customShadow: '6px 5px 0px 0px rgba(64, 46, 50, 1)'
      },
      borderRadius: {
        max: '241px'
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
        xl: '1280px',

        '1.9lg': '1238px',
        '1.5lg': '1172px',
        '1.3lg': '1050px',
        lg: '1024px',

        '3md': '976px',
        '2.7md': '900px',
        '2.6md': '722px',
        '2.5md': '700px',
        '1.5md': '710px',
        md: '672px',
        '0.8md': '612px',

        sm: '574px',
        xsm: '538px',
        '0.9xsm': '520px',
        '0.8xsm': '485px',
        '0.7xsm': '471px',
        '0.5xsm': '468px',
        xxsm: '400px',
        '0.5xxsm': '350px'
      },
      fontSize: {
        '0.5xs': '10px',
        xs: '12px',
        '1.3xs': '12.5px',
        '1.5xs': '13px',
        sm: '14px',
        '1.1sm': '14.41px',
        '1.5sm': '15px',
        base: '16px',
        '1.5base': '17px',
        lg: '18px',
        '1.5lg': '19px',
        xl: '20px',
        '1.5xl': '22px',
        '2xl': '24px',
        '2.2xl': '25.95px',
        '2.3xl': '26px',
        '2.5xl': '28px',
        '3xl': '30px',
        '3.3xl': '32px',
        '3.5xl': '34.59px',
        '4xl': '36px',
        '4.5xl': '40px',
        '5xl': '48px',
        '5.5xl': '50px',
        '6xl': '60px',
        '6.5xl': '65px',
        '7xl': '72px',
        '7.2xl': '80px',
        '7.3xl': '85.57px',
        '7.5xl': '90px',
        '8xl': '96px',
        '8.5xl': '100px',
        '8.55xl': '115px',
        '9xl': '128px',
        '10xl': '141px'
      }
    }
  },
  plugins: []
}
