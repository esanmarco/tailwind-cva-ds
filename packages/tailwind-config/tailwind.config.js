const colors = require("tailwindcss/colors");

module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        primary: "#f47527",
        secondary: "#130046",
        accent: "#EB6B47",
        neutral: "#23282F",
        info: "#119da4",
        success: "#36D399",
        warning: "#ffec66",
        error: "#c43950",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
