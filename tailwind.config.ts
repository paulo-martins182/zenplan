import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
			primary: {
				'50':  '#ffffff',   
				'100': '#f5f6f7',  
				'200': '#e4e6e8',   
				'300': '#c9ccd1',   
				'400': '#aeb3bb',   
				'500': '#8a94a6',   
				'600': '#61708a',  
				'700': '#435471',   
				'800': '#2f3c59',  
				'900': '#1e2941',   
				'950': '#121a2d',
				},
				secondary: {
					'50':  '#f2f9f8',
					'100': '#d9f0ec',
					'200': '#b2e0d8',
					'300': '#84c9bd',
					'400': '#56ad9d',
					'500': '#3e917f',
					'600': '#2e7264',
					'700': '#285855',
					'800': '#1f403d',
					'900': '#152b28',
					'950': '#0d1a18',
				},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
			
  		},
		 fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
  	},
  },
  plugins: [],
};

export default config;
