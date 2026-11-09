import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './i18n'

// greeting for whoever opens DevTools
console.log(
  '%cMrToNGx0%c\nHi developer. This site is built with React, Vite, Tailwind CSS and Framer Motion.\nSource: https://github.com/MrToNGx0/mrtongx0.github.io\nTip: press Ctrl/Cmd + K anywhere on the page.',
  'font: 600 28px Anuphan, sans-serif; color: oklch(75% 0.183 55.934);',
  'font: 13px/1.6 monospace; color: #64748b;'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
