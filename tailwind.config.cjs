/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/index.tsx",
    "./src/App.tsx",
    "./src/components/Home.tsx",
    "./src/components/Menu.tsx",
    "./src/components/Canvas.tsx"
  ],
  theme: {
    screens:{
      'sm-max':{'max': '640px'},
      'md-max':{'max': '768px'},
    },
    fontFamily:{
      montserrat_Al:['Montserrat Alternates', 'sans-serif']
    }
  },
  plugins: [],
};
