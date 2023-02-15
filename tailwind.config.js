/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        
      },
      margin:{
        '760' : '768px'
      },
        width:{
          '768px' : '768px'
        },
        height: {
          '768px' : '768px'
        },
        fontFamily:{
          'Raleway' : ['Raleway']
        },
        colors :{
          'red' : '#ff0000'
        }
        
    },
  },
  plugins: [],
}
