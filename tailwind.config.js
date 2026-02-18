/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cloud Dancer palette
        'cloud-dancer': '#F4F0EB',
        'veiled-vista': '#B5D4C3',
        'baltic-sea': '#6BA4B8',
        'golden-mist': '#D4C978',
        'quiet-violet': '#9B8FA8',
        'cloud-cover': '#A8A5A0',
        'hematite': '#6B6560',
        'blue-fusion': '#4A6670',
        'ink': '#1A1918',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
