module.exports = {
  content: [
    "./src/components/**/*.{js,jsx}",
    "./src/containers/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}