import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom' // Import HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Use HashRouter specifically for GitHub Pages */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)