/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      Azules: {
        1: '#ECFCFF',
        2: '#B2FCFF',
        3: '#5EDFFF',
        4: '#3E64FF',
      }
    }
  },
  plugins: [],
}

