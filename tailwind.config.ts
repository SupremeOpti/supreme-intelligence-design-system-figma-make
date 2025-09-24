import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./node_modules/@supreme-intelligence/**/*.{js,ts,jsx,tsx}"
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Supreme Intelligence Brand Colors
				'supreme-blue': {
					50: 'var(--supreme-blue-50)',
					100: 'var(--supreme-blue-100)',
					200: 'var(--supreme-blue-200)',
					300: 'var(--supreme-blue-300)',
					400: 'var(--supreme-blue-400)',
					500: 'var(--supreme-blue-500)',
					600: 'var(--supreme-blue-600)',
					700: 'var(--supreme-blue-700)',
					800: 'var(--supreme-blue-800)',
					900: 'var(--supreme-blue-900)',
					950: 'var(--supreme-blue-950)',
				},
				neutral: {
					300: 'var(--neutral-300)',
				},
				gray: {
					100: 'var(--color-gray-100)',
				},
				slate: {
					50: 'var(--slate-50)',
				},
				white: 'var(--white)',
				black: 'var(--black)',
				transparent: 'var(--transparent)',
			},
			borderRadius: {
				none: 'var(--radius-none)',
				xs: 'var(--radius-xs)',
				sm: 'var(--radius-sm)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
				'2xl': 'var(--radius-2xl)',
				'3xl': 'var(--radius-3xl)',
				'4xl': 'var(--radius-4xl)',
				full: 'var(--radius-full)',
			},
			spacing: {
				0: 'var(--spacing-0)',
				'0.5': 'var(--spacing-0-5)',
				1: 'var(--spacing-1)',
				'1.5': 'var(--spacing-1-5)',
				2: 'var(--spacing-2)',
				'2.5': 'var(--spacing-2-5)',
				3: 'var(--spacing-3)',
				'3.5': 'var(--spacing-3-5)',
				4: 'var(--spacing-4)',
				5: 'var(--spacing-5)',
				6: 'var(--spacing-6)',
				7: 'var(--spacing-7)',
				8: 'var(--spacing-8)',
				9: 'var(--spacing-9)',
				10: 'var(--spacing-10)',
				11: 'var(--spacing-11)',
				12: 'var(--spacing-12)',
				14: 'var(--spacing-14)',
				16: 'var(--spacing-16)',
				20: 'var(--spacing-20)',
				24: 'var(--spacing-24)',
				28: 'var(--spacing-28)',
				32: 'var(--spacing-32)',
				36: 'var(--spacing-36)',
				40: 'var(--spacing-40)',
				44: 'var(--spacing-44)',
				48: 'var(--spacing-48)',
				52: 'var(--spacing-52)',
				56: 'var(--spacing-56)',
				60: 'var(--spacing-60)',
				64: 'var(--spacing-64)',
				72: 'var(--spacing-72)',
				80: 'var(--spacing-80)',
				96: 'var(--spacing-96)',
			},
			boxShadow: {
				none: 'var(--shadow-none)',
				'2xs': 'var(--shadow-2xs)',
				xs: 'var(--shadow-xs)',
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
				'2xl': 'var(--shadow-2xl)',
				'inset-2xs': 'var(--shadow-inset-2xs)',
				'inset-xs': 'var(--shadow-inset-xs)',
				'inset-sm': 'var(--shadow-inset-sm)',
			},
			blur: {
				none: 'var(--blur-none)',
				xs: 'var(--blur-xs)',
				sm: 'var(--blur-sm)',
				md: 'var(--blur-md)',
				lg: 'var(--blur-lg)',
				xl: 'var(--blur-xl)',
				'2xl': 'var(--blur-2xl)',
				'3xl': 'var(--blur-3xl)',
			},
			backdropBlur: {
				none: 'var(--backdrop-blur-none)',
				xs: 'var(--backdrop-blur-xs)',
				sm: 'var(--backdrop-blur-sm)',
				md: 'var(--backdrop-blur-md)',
				lg: 'var(--backdrop-blur-lg)',
				xl: 'var(--backdrop-blur-xl)',
				'2xl': 'var(--backdrop-blur-2xl)',
				'3xl': 'var(--backdrop-blur-3xl)',
			},
			opacity: {
				0: 'var(--opacity-0)',
				5: 'var(--opacity-5)',
				10: 'var(--opacity-10)',
				15: 'var(--opacity-15)',
				20: 'var(--opacity-20)',
				25: 'var(--opacity-25)',
				30: 'var(--opacity-30)',
				35: 'var(--opacity-35)',
				40: 'var(--opacity-40)',
				45: 'var(--opacity-45)',
				50: 'var(--opacity-50)',
				55: 'var(--opacity-55)',
				60: 'var(--opacity-60)',
				65: 'var(--opacity-65)',
				70: 'var(--opacity-70)',
				75: 'var(--opacity-75)',
				80: 'var(--opacity-80)',
				85: 'var(--opacity-85)',
				90: 'var(--opacity-90)',
				95: 'var(--opacity-95)',
				100: 'var(--opacity-100)',
			},
			fontSize: {
				xs: ['var(--font-size-xs)', { lineHeight: 'var(--line-height-normal)' }],
				sm: ['var(--font-size-sm)', { lineHeight: 'var(--line-height-normal)' }],
				base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
				lg: ['var(--font-size-lg)', { lineHeight: 'var(--line-height-normal)' }],
				xl: ['var(--font-size-xl)', { lineHeight: 'var(--line-height-normal)' }],
				'2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-tight)' }],
				'3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-tight)' }],
				'4xl': ['var(--font-size-4xl)', { lineHeight: 'var(--line-height-tight)' }],
				'5xl': ['var(--font-size-5xl)', { lineHeight: 'var(--line-height-tight)' }],
				'6xl': ['var(--font-size-6xl)', { lineHeight: 'var(--line-height-tight)' }],
				'7xl': ['var(--font-size-7xl)', { lineHeight: 'var(--line-height-tight)' }],
				'8xl': ['var(--font-size-8xl)', { lineHeight: 'var(--line-height-tight)' }],
				'9xl': ['var(--font-size-9xl)', { lineHeight: 'var(--line-height-tight)' }],
			},
			fontWeight: {
				light: 'var(--font-weight-light)',
				normal: 'var(--font-weight-normal)',
				medium: 'var(--font-weight-medium)',
				semibold: 'var(--font-weight-semibold)',
				bold: 'var(--font-weight-bold)',
				extrabold: 'var(--font-weight-extrabold)',
				black: 'var(--font-weight-black)',
			},
			lineHeight: {
				none: 'var(--line-height-none)',
				tight: 'var(--line-height-tight)',
				snug: 'var(--line-height-snug)',
				normal: 'var(--line-height-normal)',
				relaxed: 'var(--line-height-relaxed)',
				loose: 'var(--line-height-loose)',
			},
			letterSpacing: {
				tighter: 'var(--letter-spacing-tighter)',
				tight: 'var(--letter-spacing-tight)',
				normal: 'var(--letter-spacing-normal)',
				wide: 'var(--letter-spacing-wide)',
				wider: 'var(--letter-spacing-wider)',
				widest: 'var(--letter-spacing-widest)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;