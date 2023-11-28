import  { nextui } from"@nextui-org/react";
import type { Config } from 'tailwindcss'

const config: Config = {
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
    nextui({
      prefix: "nextui",
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
      }
    }),
    require("tailwind-container-break-out"),
    require("@tailwindcss/typography"),
  ],
}

export default config