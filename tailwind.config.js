/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage:{
        'hero-pattern':"url('https://sunnylandingpages.com/upload/11862/pictures/eb3db80f2ef4043ecd0b4306e14d429ee16ae3d01db8124492f7c67f_1280.jpg')"
      }
    },
  },
  plugins: [],
}
