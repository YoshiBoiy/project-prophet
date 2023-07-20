const { transform } = require('typescript');
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
			'murs': ['Murs-Gothic'],
		},
		colors: {
			"primary": "#070816",
			"secondary": "#202738",
			"accent": "#215BE2",
			"accent-bg": "#1C2C51",
			"accent-stroke": "#26407A",
			"stroke": "#333644",
			"font": "#FFFFFF",
			"font-bg": "#6B7188",
			"font-bg2": "#98A1C0",
			"neutral": "#232635",
			"base-100": "#232635",
			"info": "#dc2626",
			"success": "#3FB950",
			"warning": "#D19821",
			"error": "#F75149",
		},
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#070816",
					"secondary": "#202738",
					"accent": "#215BE2",
					"accent-bg": "#1C2C51",
					"accent-stroke": "#26407A",
					"stroke": "#333644",
					"font": "#FFFFFF",
					"font-bg": "#6B7188",
					"font-bg2": "#98A1C0",
					"neutral": "#232635",
					"base-100": "#232635",
					"info": "#dc2626",
					"success": "#3FB950",
					"warning": "#D19821",
					"error": "#F75149",
				},
			},
		],
	},
}

