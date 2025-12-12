/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tb: "856px",
        tbt_base: "1033px",
        tbt_xl: "1331px",
      },
      fontFamily: {
        poppins: "poppins",
        KindSans: "Kind Sans",
        MaisonNeue: "Maison Neue",
        NeueHaasGrotesk: "Neue Haas Grotesk Display Pro",
      },
      colors: {
        grey: "#eeeeee",
        red: "rgb(218, 61, 5)",
      },
      lineHeight: {
        "relaxed-char": "0.95",
      },
      keyframes: {
        headerText: {
          "0%": { width: "100%" },
          "100%": { width: "15rem" },
        },
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInSlideIn: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "header-text": "headerText 5s ease forwards",
        blink: "blink 1s step-end infinite",
        slideInLeft: "slideInLeft 0.5s ease forwards",
        fadeInSlideIn: "fadeInSlideIn 0.6s ease forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
