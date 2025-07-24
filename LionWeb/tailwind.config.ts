
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
                sunbeam: {
                    50: '#FFFDF0',
                    100: '#FFFAE0',
                    200: '#FFF5C2',
                    300: '#FFE97A',
                    400: '#FFD230', // Main yellow
                    500: '#FFC107',
                    600: '#E29400',
                    700: '#BF6E00',
                    800: '#9A5500',
                    900: '#7A4400',
                },
                eco: {
                    50: '#EEFDF7',
                    100: '#D5F9E8',
                    200: '#A7F3D0',
                    300: '#6EE7B7',
                    400: '#34D399', // Main green
                    500: '#10B981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065F46',
                    900: '#064E3B',
                },
                navy: {
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    200: '#BFDBFE',
                    300: '#93C5FD',
                    400: '#60A5FA',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E40AF',
                    900: '#1E3A8A', // Main blue
                },
                green: {
                    50: '#F2FCF5',
                    100: '#E0F8E8',
                    200: '#C1F1D1',
                    300: '#92E3AF',
                    400: '#5ED086', 
                    500: '#34B85E',
                    600: '#269A47',
                    700: '#1E7A3A',
                    800: '#1A6131',
                    900: '#164F29',
                },
                gray: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                },
                // Natural color palette (no longer used but kept for backward compatibility)
                natural: {
                    dark: '#121210',
                    deeper: '#1A1A18',
                    mid: '#2C2C28',
                    light: '#E8E6D9',
                    accent: '#4A4A40',
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				},
                'solar-pulse': {
                    '0%, 100%': { 
                        transform: 'scale(1)',
                        opacity: '0.7' 
                    },
                    '50%': { 
                        transform: 'scale(1.05)',
                        opacity: '1' 
                    },
                },
                'natural-fade': {
                    '0%': { 
                        opacity: '0.7' 
                    },
                    '50%': { 
                        opacity: '0.9' 
                    },
                    '100%': {
                        opacity: '0.7'
                    }
                },
                'subtle-glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 15px rgba(52, 164, 124, 0.2)',
                    },
                    '50%': {
                        boxShadow: '0 0 20px rgba(52, 164, 124, 0.4)',
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'solar-pulse': 'solar-pulse 3s ease-in-out infinite',
                'natural-fade': 'natural-fade 6s ease-in-out infinite',
                'subtle-glow': 'subtle-glow 4s ease-in-out infinite'
			},
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'grain-pattern': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"4\" height=\"4\" viewBox=\"0 0 4 4\"%3E%3Cpath fill=\"%23405060\" fill-opacity=\"0.15\" d=\"M1 3h1v1H1V3zm2-2h1v1H3V1z\"%3E%3C/path%3E%3C/svg%3E')",
                'mountain-hero': "linear-gradient(to bottom, rgba(20, 30, 40, 0.8), rgba(25, 35, 45, 0.7))",
                'subtle-texture': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
