module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        customViolet: '#755FFF', // Example custom color
        // customPurple: 'rgb(117, 95, 255)', // Equivalent to #755FFF
        // customPurple1: 'rgba(117, 95, 255, 0.8)', // 80% opacity
        customPurple: 'rgb(117, 95, 255)',
        customPurpleDark: 'rgb(90, 70, 230)', // A darker shade for the gradient
        customPurpleLight: 'rgb(233, 230, 255)', // Soft lavender-like shade
        customPurpleMid: 'rgb(137, 115, 255)', // A softer but still vibrant shade
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgb(117, 95, 255), rgb(90, 70, 230))',
        // 'custom-gradient': 'linear-gradient(to right, rgba(117, 95, 255, 0.8), rgba(90, 70, 230, 0.8))',
      },
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
