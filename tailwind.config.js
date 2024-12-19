import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'med': '1050px',
        "smed": '608px',
        "smll": '350px',
      },

      keyframes:{
        rightOpen:{
          "0%": {transform: 'translateX(200%)', opacity: 0},
          "40%": {opacity: .4},
          "100%": {transform: 'translateX(100%)', opacity: 1},
        },

        fadeIn:{
          "0%": {opacity: 0},
          "100%": {opacity: 1}
        }
      },

      animation: {
        'from-right': 'rightOpen .5s ease',
        'fade-in': 'fadeIn .3s linear'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

