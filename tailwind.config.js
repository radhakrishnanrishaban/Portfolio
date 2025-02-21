/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.2" }],
        h1: ["2.5rem", { lineHeight: "1.3" }],
        h2: ["2rem", { lineHeight: "1.4" }],
        body: ["1.125rem", { lineHeight: "1.6" }],
      },
      colors: {
        background: {
          light: "#ffffff",
          dark: "#f8f8f8",
        },
        text: {
          primary: "#000000",
          secondary: "#666666",
          tertiary: "#999999",
        },
        accent: {
          light: "#f0f0f0",
          dark: "#e0e0e0",
        },
        surface: {
          light: "#f8fafc",
          dark: "#1f2937",
        },
        primary: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        secondary: {
          DEFAULT: "#525252",
        },
      },
      backgroundImage: {
        "neural-pattern": "url('/patterns/neural.svg')",
        "code-pattern": "url('/patterns/code.svg')",
      },
    },
  },
  plugins: [],
};
