import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Change this import:
import { HashRouter } from 'react-router-dom' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Change this tag: */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)