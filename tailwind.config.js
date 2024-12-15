/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'med': '1150px',
        "smed": '608px',
        "smll": '350px',
      }
    },
  },
  plugins: [],
}

