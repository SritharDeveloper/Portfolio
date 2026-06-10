/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#0f172a",
        accent: "#6366f1",
        muted: "#64748b",
      },
      animation: {
        pulse_slow: "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
