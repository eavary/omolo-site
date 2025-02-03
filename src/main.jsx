import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TypingApp from './TypingApp.jsx'

createRoot(document.getElementById('typing-app')).render(
  <StrictMode>
    <TypingApp />
  </StrictMode>,
)
