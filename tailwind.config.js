const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-pink': '#ED0089',
        'theme-light-blue': '#4ccff4',
        'theme-blue': '#0080ca',
        'theme-very-light-blue': '#E2F3FE',
        'theme-creamy': '#F1F9FE',
        'theme-testimonials-color': '#97bddc',
        'theme-faq-blue': '#32a1e2',
        'theme-footer-bright-blue': '#4ccff4',
        'theme-pink-hover': '#C5197C',
        'theme-border-blue': '#4C9AC8'
      },
      backgroundImage: theme => ({
        'hero_bg': "url('/hero_and_features.png')",
        'hero_bg_mobile': "url('/hero_and_features_mobile.png')",
        'for_who_bg': "url('/for_who_bg.png')",
        'features_bg': "url('/features_bg.png')",
        'badania_naukowe_bg': "url('/badania_naukowe_bg.png')",
        'mystery_bg': "url('/mystery_bg.png')",
        'testimonials_layer': "url('/testimonials_layer.png')",
        'footer_bg': "url('/footer_bg.png')",
      }), 
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
       // sm: ['14px', '20px'],
        base: ['16px', '30px'],
        lg: ['18px', '35px'],
        xl: ['25px', '40px'],
        xxl: ['32px', '40px'],
        '2xl': ['45px', 'normal'],
        'testimonial': ['20px', 'normal']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
