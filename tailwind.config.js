/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F2EB",
        maroon: {
          DEFAULT: "#800000",
          dark: "#5E1914",
          deep: "#3A0000",
          light: "#A52A2A",
        },
        burgundy: "#800020",
        wine: "#5E1914",
        crimson: "#990000",
        beige: {
          DEFAULT: "#5A1212", // Redefined to rich maroon for texts
          light: "#800000",
          champagne: "#A52A2A",
        },
        gold: "#800000",
        bronze: "#5A1212",
        // Compatibility mapping
        forest: "#3A0000",
        emerald: "#800000",
        moss: "#5E1914",
        sage: "#800000",
      },
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
        cormorant: ["'Cormorant Garamond'", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
