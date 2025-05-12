
import { type Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'cream': '#F9F5F0',
        'brown': {
          light: '#A67F5D',
          DEFAULT: '#6B4025',
        },
        'beige': {
          light: '#F7F1E9',
          DEFAULT: '#E8D5C4',
        }
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
      }
    },
  },
  plugins: [],
} satisfies Config;
