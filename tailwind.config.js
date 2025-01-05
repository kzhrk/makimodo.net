/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["!node_modules", "./**/*.{html,js,vue}"],
	theme: {
		extend: {
			colors: {
				link: "#1c3c7c",
				white: "#fff",
			},
		},
	},
};
