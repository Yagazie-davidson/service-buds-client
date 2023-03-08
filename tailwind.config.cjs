/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				gr: "#888888",
				asht: "#838383",
				background: "#FFFFFF",
				pri: "#000000",
			},
		},
		screens: {
			mobile: "420px",
			tablet: "640px",
		},
	},
	plugins: [],
};
