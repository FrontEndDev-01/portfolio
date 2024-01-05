/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{ts,tsx,js}", "./public/*.html"],
  theme: {
    screens: {
      "mobile-s": "320px",
      "mobile-m": "375px",
      ...defaultTheme.screens,
      '3xl': '1600px',
    },
    extend: {
      colors: {
        "custom-primary": "#2970db",
        "vb-primary": "#007E7E",
        "vb-admin": "#2970db",
        "vb-secondary": "#182667",
        "vb-footer": "#0e5454",
        textColor: "#1e213d",
      },
      boxShadow: {
        "shadow-lg": "0px 0px 40px 15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
      },
      fontFamily: {
        town: ["Town"],
      },
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
  plugins: [
		require("tailwindcss"), 
		// require("autoprefixer")
	],
};
