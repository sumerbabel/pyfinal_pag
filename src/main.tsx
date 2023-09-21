import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes.tsx'
import PrincipalConteiner from './pages/PrincipalConteiner.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
      <PrincipalConteiner>
      <Routes />
      </PrincipalConteiner>
        
    </BrowserRouter>
  </React.StrictMode>,
)
