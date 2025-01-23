module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'text-red-500',
    'text-blue-500',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1D4ED8",
        customGreen: "#059669",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Adicionar fontes personalizadas
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'dark',
      'retro',
      'corporate',
    ],
    base: true,
  }
}
