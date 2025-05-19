import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'

createRoot(document.getElementById("theme_changer")).render(
    <StrictMode>
        <App/>
    </StrictMode>
)