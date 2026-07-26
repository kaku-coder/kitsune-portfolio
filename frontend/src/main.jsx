import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('%c⚠️ STOP!', 'color: red; font-size: 48px; font-weight: bold;');
console.log('%cThis portfolio is protected. Copying or replicating this design is prohibited.', 'color: orange; font-size: 16px;');
console.log('%c© 2026 Prakash — All Rights Reserved', 'color: gray; font-size: 12px;');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
