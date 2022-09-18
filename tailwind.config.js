module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gra-gray":"#171717",
        "diff-gray":"#788596"
      },
      fontFamily: {
        inter: ["'Inter', sans-serif"],
      },
    },
  },
  plugins: [],
}
