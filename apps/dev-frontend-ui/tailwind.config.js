/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050a14', // Very dark blue/black
        surface: '#0f172a',    // Slightly lighter for cards
        highlight: '#1e293b',  // Hover states
        primary: '#3b82f6',    // Standard Blue
        accent: '#f97316',     // Orange/Amber for accents
        neonBlue: '#00f3ff',   // Cyberpunk Cyan
        neonOrange: '#ff9000', // Cyberpunk Orange
        neonPurple: '#b026ff', // Cyberpunk Purple
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.3)',
        'neon-orange': '0 0 10px rgba(255, 144, 0, 0.5), 0 0 20px rgba(255, 144, 0, 0.3)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
