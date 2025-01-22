module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        zion: {
          "primary": "#6700ff",
          "primary-content": "#dadaff",
          "secondary": "#008800",
          "secondary-content": "#d3e8d1",
          "accent": "#3b5300",
          "accent-content": "#d4dbcc",
          "neutral": "#210714",
          "neutral-content": "#cfc7ca",
          "base-100": "#262a3a",
          "base-200": "#202331",
          "base-300": "#191c28",
          "base-content": "#cfd0d4",
          "info": "#258fff",
          "info-content": "#000716",
          "success": "#76b000",
          "success-content": "#050b00",
          "warning": "#a74900",
          "warning-content": "#f0dacf",
          "error": "#ff3d76",
          "error-content": "#160105",
        },
      },
      'dark',
      'retro',
      'corporate',      
    ],
    base: true,
  }
}
