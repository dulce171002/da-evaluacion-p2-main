import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/Footer.css'
import './components/barralateral.css'
import App from './components/sidebar'
import Card from './components/Tarjetas'
import Footer from './components/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <Card/>
    <Footer/>
  </StrictMode>,
)
