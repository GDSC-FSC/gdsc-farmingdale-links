/* eslint-disable @typescript-eslint/no-unused-vars */

import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				branding: {
					light: {
						blue: {
							100: "#ecf3fe",
							200: "#d9e7fd",
							300: "#b3cefb",
							400: "#8ab3f8",
							500: "#4285f4",
						},
						green: {
							100: "#ebf6ee",
							200: "#d6eedd",
							300: "#aedcba",
							400: "#72c287",
							500: "#34a853",
						},
						red: {
							100: "#fdeceb",
							200: "#fbd9d7",
							300: "#f7b4ae",
							400: "#ef7368",
							500: "#ea4335",
						},
						yellow: {
							100: "#fff8e6",
							200: "#fef2cd",
							300: "#fde49b",
							400: "#fcd04f",
							500: "#fbbc04",
						},
					},
					dark: {
						blue: {
							600: "#3b78dc",
							700: "#356ac3",
							800: "#285092",
							900: "#1a3562",
							1000: "#0d1b31",
						},
						green: {
							600: "#2f974b",
							700: "#2a8642",
							800: "#1f6532",
							900: "#154321",
							1000: "#0a2211",
						},
						red: {
							600: "#d33c30",
							700: "#bb362a",
							800: "#8c2820",
							900: "#5e1b15",
							1000: "#2f0d0b",
						},
						yellow: {
							600: "#e2a904",
							700: "#c99603",
							800: "#97740a",
							900: "#644b02",
							1000: "#322601",
						},
					},
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				moveHorizontal: {
					"0%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
					"50%": {
						transform: "translateX(50%) translateY(10%)",
					},
					"100%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
				},
				moveInCircle: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				moveVertical: {
					"0%": {
						transform: "translateY(-50%)",
					},
					"50%": {
						transform: "translateY(50%)",
					},
					"100%": {
						transform: "translateY(-50%)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				first: "moveVertical 30s ease infinite",
				second: "moveInCircle 20s reverse infinite",
				third: "moveInCircle 40s linear infinite",
				fourth: "moveHorizontal 40s ease infinite",
				fifth: "moveInCircle 20s ease infinite",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		nextui(),
	],
};

export default config;
