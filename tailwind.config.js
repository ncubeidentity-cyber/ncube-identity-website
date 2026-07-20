/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071b3a",
        royal: "#0d5bd7",
        cyanx: "#18a8ff",
      },
      boxShadow: {
        glow: "0 0 45px rgba(24,168,255,.22)"
      }
    }
  },
  plugins: [],
}
