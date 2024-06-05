/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        custom: '1450px',
        customSmall:'400px',
      },
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
      height: {
        483: '483px',
        400.3: '400.3px',
        82.7: '82.7px',
        306: '306px',
        112.38: '112.38px',
        48: '48px',
        74.36: '74.36px',
        112.38: '112.38px',
        482.14: '482.14px',
        593.59: '593.59px',
        640: '640px',
        196.14: '196.14px',
        286: '286px',
        144.14: '144.14px',
        50.45: '50.45px',
        52: '52px',
        878: '878px',
        128: '128px',
        88: '88px'
      },
      width: {
        461.44: '461.44px',
        853.83: '853.83px',
        229.37: '229.37px',
        270.58: '270.58px',
        133.86: '133.86px',
        288.29: '288.29px',
        354.59: '354.59px',
        129.73: '129.73px',
        288.29: '288.29px',
        144.14: '144.14px',
        1440: '1440px',
        1355.86: '1355.86px',
        180.95: '180.95px',
        49.92: '49.92px',
        300: '300px',
        79: '79px',
        737: '737px'
      },
      padding: {
        39: '39px',
        34: '34px',
        64: '64px',
        27.65: '27.65px',
        20.18: '20.18px',
        16: '16px',
        17: '17px',
        108: '108px',
        42: '42px'
      },
      margin: {
        32: '32px',
        16: '16px',
        146: '146px',
        53: '53px'
      },
      gap: {
        122: '122px',
        57: '57px',
        53: '53px',
        28: '28px'
      },
      borderRadius: {
        23.06: '23.06px',
        11.53: '11.53px',
        28.52: '28.52px'
      },
      boxShadow: {
        button: '3px 3px 0px #FFEEDA',
        events: '5px 5px 0px #1D1D1D'
      },
      fontSize: {
        32: '32px',
        18: '18px',
        34.59: '34.59px',
        14.41: '14.41px',
        25.95: '25.95px',
        85.57: '85.57px'
      },
      letterSpacing: {
        custom: ''
      },
      fontFamily: {
        Poppins: 'Poppins'
      }
    }
  },
  plugins: []
}
