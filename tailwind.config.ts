import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: "2rem",
  		screens: {
  			"2xl": "1400px",
  		},
  	},
  	extend: {
  		fontFamily: {
  			playfair: ['var(--font-playfair-display)'],
  		},
  		colors: {
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
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
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: 'none',
  					color: 'hsl(var(--foreground))',
  					h1: {
  						fontFamily: 'var(--font-playfair-display)',
  					},
  					h2: {
  						fontFamily: 'var(--font-playfair-display)',
  						color: 'hsl(var(--primary))',
  						marginTop: '2em',
  						marginBottom: '1em',
  					},
  					h3: {
  						fontFamily: 'var(--font-playfair-display)',
  						color: 'hsl(var(--primary))',
  					},
  					a: {
  						color: 'hsl(var(--primary))',
  						'&:hover': {
  							color: 'hsl(var(--primary))',
  							opacity: 0.8,
  						},
  					},
  					p: {
  						marginTop: '1.5em',
  						marginBottom: '1.5em',
  					},
  					ul: {
  						marginTop: '1em',
  						marginBottom: '1em',
  					},
  					li: {
  						marginTop: '0.5em',
  						marginBottom: '0.5em',
  					},
  				},
  			},
  		},
  	}
  },
  plugins: [
  	require("tailwindcss-animate"),
  	require("@tailwindcss/typography")
  ],
} satisfies Config;

export default config;
