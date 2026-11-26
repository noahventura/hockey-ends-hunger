import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './sections.css'
import './pages.css'

// A server that only knows the original site answers a /v2/... deep link with the root index.html,
// which sends the visitor to /v2/?p=<path>. Put the real path back before the router reads it.
// The value comes from the URL, so only a plain path of this site is accepted; anything else lands on v2's home.
const p = new URLSearchParams(window.location.search).get('p')
if (p !== null) {
  const [pathPart, query = ''] = p.split('?')
  const path = `/${pathPart.replace(/^\/+/, '')}`
  const safe = /^\/[A-Za-z0-9\-_/]*$/.test(path) && !path.includes('//')
  const search = safe && /^[A-Za-z0-9\-_=&%.]*$/.test(query) && query ? `?${query}` : ''
  window.history.replaceState(null, '', `/v2${safe ? path : '/'}${search}${window.location.hash}`)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
