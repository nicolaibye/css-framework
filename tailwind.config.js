/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        offWhite: "#fff5f0",
        peach: "#f0bebe",
        plum: "#824d69",
        dusk: "#522959",
        dreams: "#2a114b",
        night: "#180018",
      },
      fontFamily: {
        averia: ["Averia Serif Libre", "Georgia", "serif"],
        alegreya: ["Alegreya Sans", "Open Sans", "Helvetica", "sans-serif"],
        aladin: ["Aladin", "Georgia", "serif"],
      },
      height: {
        100: "25rem",
        99: "24.75rem",
        143: "35.875rem",
        screen75: "75vh",
        none: "unset",
        userCalc: "calc(100vh - 140px)",
      },
      width: {
        160: "40rem",
        102: "25.5rem",
        22: "5.5rem",
        headerCalc: "calc(100% - 2rem)",
      },
      minHeight: {
        none: "unset",
        99: "25rem",
        50: "12.5rem",
      },
      maxHeight: {
        none: "unset",
        calcComment: "50%",
      },
      gridTemplateColumns: {
        post2: "repeat(2, 320px)",
        commentSubmit: "4fr 1fr",
      },
      screens: {
        xs: "375px",
      },
      flex: {
        "0-0-50": "0 0 50%",
      },
    },
  },
  plugins: [],
};
