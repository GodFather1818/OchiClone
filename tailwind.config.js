/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NS: ["Noto Sans", "sans-serif"],
        RM: ["Reddit Mono", "monospace"],
        POP: ["Poppins", "sans-serif"],
        TAJ: ["Tajawal", "sans-serif"],
     }
    },
  },
  plugins: [],
}

