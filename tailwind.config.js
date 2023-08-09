/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        Loto: ["Lato", "sans-serif"],
        RobotoMono: ["'Roboto Mono'", "monospace"],
      },
      fontSize: {
        xs: ["12px", "15px"],
        sm: ["14px", "1.5"],
        base: ["16px", "19px"],
        lg: ["18px", "19px"],
        xl: ["20px", "24px"],
        "2xl": ["24px", "29px"],
      },
      colors: {
        success: {
          light: '#1d9d61',
          DEFAULT: "#198754",
          dark: "#115c39"
        },
        danger: {
          DEFAULT: '#DC3545'
        },
        gray: {
          100: "#F8F9FA",
          400: "#CED4DA",
          600: "#6C757D",
          900: "#212529",
        },
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("@tailwindcss/forms"),
  ],
};
