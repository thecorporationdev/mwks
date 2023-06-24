/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

const myClass = plugin(function({ addUtilities }){
  addUtilities({
    ".rotating":{
      transform:"rotateX(90deg)"
    }
    
  })
})


module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily : {
      stapel : ["STAPEL", "sans-serif"],
      optien : ["OPTIEN", "sans-serif"]
    }
  },
  plugins: [myClass],
}

