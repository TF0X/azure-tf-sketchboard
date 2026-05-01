/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#1a1a2e',
        panel: '#16213e',
        panelDark: '#0f1729',
        accent: '#0078D4',
        accentHover: '#106EBE',
        textMain: '#e8eaed',
        textDim: '#9aa0a6',
        border: '#2b3656'
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      }
    }
  },
  plugins: []
}
