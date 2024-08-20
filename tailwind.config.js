/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'infinite-scroll-down': {
					  '0%': { transform: 'translateY(-25%)', opacity: '0' },
					  '75%': { transform: 'translateY(50%)', opacity: '1' },
					  '100%': { transform: 'translateY(50%)',opacity: '0' },
				}	
			},
			animation: {
				'fade-in': 'fade-in 1s ease-in-out',
				'infinite-scroll-down': 'infinite-scroll-down 1.5s ease-in-out infinite',
			},
			colors: {
				'ui-primary': {
					DEFAULT: "#ecfeff",
				},
				primary: {
					DEFAULT: "#22d3ee",
				},
				creative: {
					DEFAULT: "#4ade80",
				},
				analytic: {
					DEFAULT: "#c084fc",
				},
				gray: {
					200: "#D5DAE1"
				},
				black: {
					DEFAULT: "#000",
					500: "#1D2235"
				},
				blue: {
					500: "#2b77e7"
				}
			},
			fontFamily: {
				spacemono: ["Space Mono", "sans-serif"],
				jostvar: ["Jost Variable", "sans-serif"],
				worksans: ["Work Sans", "sans-serif"],
				poppins: ['Poppins', "sans-serif"]
			},
			boxShadow: {
				card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
			}
		},
	},
	plugins: [],

};
