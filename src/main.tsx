import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/Footer.css'
import './components/barralateral.css'
import Description from './components/Description'
import App from './components/sidebar'
import Footer from './components/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <Description/>
    <Footer/>
  </StrictMode>,
)
