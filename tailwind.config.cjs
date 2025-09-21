/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(240 14% 7%)",
        foreground: "hsl(0 0% 98%)",
        primary: {
          DEFAULT: "#9A6BFF",
          foreground: "#0b011a",
        },
        accent: "#5CE1E6",
        muted: "#B3B3B3",
      },
      container: { center: true, padding: "1rem" },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
}
