/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jaro: ["jaro"],
        poetsen: ["poetsen"],
        poppins: ["poppins"],
        slabo:["slabo"],
        quicksand:["quicksand"],
        Qwitcher:["Qwitcher+Grypen"]
      },
      fontSize:{
        '1xl': '1.5rem',
        '2xl':'2.967rem',
        '4xl': '4.367rem'
      },  
      width:{
        '25':'8rem',
        '30':'10rem',
        '35':'15rem',
        '40':'20rem',
        '45':'25rem'
      },
      screens: {
          'sm': '240px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '900px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1024px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        } ,
        borderRadius: {
          '4xl' : '4.5rem',
          '5xl' : '50.5rem',
          'full' : '20.5rem'
        } ,
        height:{
          '100': '33rem'
        },
        colors:{
          'dark-blue' : '#152342'
        }
    },
  },
  plugins: [],
}

