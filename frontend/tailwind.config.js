/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1500px",
    },
    extend: {
      colors: {
        "main-color": "#D6E4E5",
        "orange-color": "#EB6440",
      },
      boxShadow: {
        1: "10px 10px 20px 0 rgba(50, 0, 50, 0.3)",
      },
    },
  },
  // eslint-disable-next-line global-require
  // plugins: [require("tw-elements/dist/plugin")],
};
