import  { nextui } from"@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
    container:  {
      center: true, 
    },
    extend: {},
  },
  plugins: [
    nextui(),
    require("tailwind-container-break-out"),
    require("@tailwindcss/typography"),
  ],
}