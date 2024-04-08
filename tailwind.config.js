/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
    },
    colors:{
      DarkCyan: 'hsl(158, 36%, 37%)',
      Cream: 'hsl(30, 38%, 92%)',
      VeryDarkBlue: 'hsl(212, 21%, 14%)',
      DarkGrayishBlue: 'hsl(228, 12%, 48%)',
      White: 'hsl(0, 0%, 100%)',
      GreenHover: '#1A4D2E'
    }, 
    fontFamily:{
      montserrat: ['Montserrat', 'sans-serif'],
      fraunces: ["Fraunces", 'serif']
    },
    letterSpacing:{
      trackingCard: '.5rem'
    }
  },
  plugins: [],
}

