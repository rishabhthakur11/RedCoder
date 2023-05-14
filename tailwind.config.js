/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      mildBrown: "#262626",
      lightBrown: "#525252",
      textGray: "#a1a1aa",
      textLightGray:"#d4d4d8",
      textRed: "#e11d48",
      boxBrown: "#404040",
      textBlue:"#2563eb",
      white:"#ffffff"
    },
  },
  plugins: [],
};
