/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          dark: "#1b1b1b",
          light: "#fff",
          accent: "#7B00D3", 
          accentDark: "#ffdb4d",
          gray: "#747474",
          grayLight: "#f2f2f2",
          grayDark: "#333333",
          grayDarker: "#1b1b1b",
        },
        fontFamily: {
          sans: ["Manrope", "sans-serif"],
          serif: ["Inter", "serif"],
          mr: ["var(--font-mr)"],
          in: ["var(--font-in)"]
        },
    },
  },
  plugins: [],
}



