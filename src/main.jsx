import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // <--- Revisa que esto esté

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- Esto debe envolver a App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)