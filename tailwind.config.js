module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primarybg: "#1E1F21",
      secondarybg: "#292A2E",
      pink: "#8D6F95",
      yellow: "#F7D365",
      blue: "#819DB5",
      white: "#FFFFFF",
      green: "#B9C36A",
      red: "#B8505B",
      grey: "#959595",
      hr: "#292A2E",
    },
    fontFamily: {
      mono: ["IBM Plex Mono", "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
