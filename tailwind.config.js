/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#684CEB",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      bgback:"#172554",
      graydark: "#273444",
      gray: "#8492a6",
      graylight: "#d3dce6",
      whiteback: "#0c4a6e",
      
    },
    extend: {},
  },
  colors: {
    blue: "#1fb6ff",
    purple: "#684CEB",
    pink: "#ff49db",
    orange: "#ff7849",
    green: "#13ce66",
    yellow: "#ffc82c",
    "gray-dark": "#273444",
    gray: "#8492a6",
    "gray-light": "#d3dce6",
  },
  plugins: [require("daisyui")],
};
