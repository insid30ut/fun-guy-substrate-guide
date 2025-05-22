
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Mushroom theme custom colors
				mushroom: {
					50: '#f8f5f0',
					100: '#e9e1d5',
					200: '#d8cbb8',
					300: '#c4b093',
					400: '#b09872',
					500: '#9c8157', // main mushroom color
					600: '#7c6543',
					700: '#5d4a32',
					800: '#3f3121',
					900: '#221a11',
				},
				forest: {
					50: '#f1f8f4',
					100: '#dbeadf',
					200: '#bfd8c7',
					300: '#9bc2a8',
					400: '#78ab89',
					500: '#5c9370', // main forest color
					600: '#47745a',
					700: '#355643',
					800: '#23392c',
					900: '#121d16',
				},
				soil: {
					50: '#f6f3f0',
					100: '#e6dcd2',
					200: '#d3c0af',
					300: '#bca189',
					400: '#a68567',
					500: '#8c6c4e', // main soil color
					600: '#6f553d',
					700: '#533f2d',
					800: '#36291e',
					900: '#1d1610',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'grow': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'grow': 'grow 2s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			backgroundImage: {
				'mushroom-pattern': "url('/mushroom-pattern.png')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
