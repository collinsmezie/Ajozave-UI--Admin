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
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-from-top': 'slideInFromTop 0.5s ease-out forwards',
      },
    }
  },
  plugins: [],
}



// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx,vue}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Nunito', 'sans-serif'],
//       },
//       keyframes: {
//         slideIn: {
//           '0%': { transform: 'translateX(100%)' }, // Start from the right
//           '100%': { transform: 'translateX(0)' },   // End at the original position
//         },
//         slideOut: {
//           '0%': { transform: 'translateX(0)' },    // Start at the original position
//           '100%': { transform: 'translateX(-100%)' }, // End off the left side
//         },
//       },
//       animation: {
//         'slide-in': 'slideIn 0.5s ease-out forwards',
//         'slide-out': 'slideOut 0.5s ease-in forwards',
//       },
//     }
//   },
//   plugins: [],
// }
