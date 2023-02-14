/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          600: "#2E2E2E",
          500: "#414141",
          400: "#777777"
        },
        primary: {
          400: "#FF963C",
          500: "#EA6C00",
          300: "#FFCC21",
          "300/400": "linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%)"
        },
        light: "#FFFFFF",
        secondary: {
          300: "#8FE9D0"
        },
      },
      backgroundImage: {
        "300-400": "linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%)"
      },
      width: {
        "116px": "116px",
        "181px": "181px",
        "234px": "234px",
        "231px": "231px",
        "280px": "280px",
        "296px": "296px",
        "960px": "960px"
      },
      height: {
        "1px": "1px",
        "72px": "72px",
        "181px": "181px",
        "231px": "231px",
        "234px": "234px",
        "134px": "134px"
      },
      boxShadow: {
        100: "0px 0px 6px #FC7400"
      },
      maxWidth: {
        960: "960px"
      }
    },
    
  },
  plugins: [],
}
