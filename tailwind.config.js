/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        PrimaryColor:"#6C25FF",
        HoverPrimary:"#493D9E",
        SecondaryColor:"#CEBAFB"
      }
    },
  },
  plugins: [],
}

