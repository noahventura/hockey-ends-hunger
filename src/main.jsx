import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import favicon from src so Vite bundles it
import faviconUrl from './images/logo.png'

// Ensure favicon link uses the bundled URL
function setFavicon(url) {
  let link = document.querySelector('#app-favicon')
  if (!link) {
    link = document.createElement('link')
    link.id = 'app-favicon'
    link.rel = 'icon'
    link.type = 'image/png'
    document.head.appendChild(link)
  }
  link.href = url
}

// Set it as early as possible
setFavicon(faviconUrl)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)