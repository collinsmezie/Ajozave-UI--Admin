module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(100%)' }, // Start from the bottom
          '100%': { transform: 'translateY(0)' },   // End at the top (normal position)
        },
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
    }
  },
  plugins: [],
}