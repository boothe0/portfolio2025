import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import Tables from './contexts/tables.jsx'

const theme_changer = document.getElementById("theme_changer");
const tables = document.getElementById("image_buttons");

if (theme_changer){
    createRoot(theme_changer).render(
        <StrictMode>
            <App/>
        </StrictMode>
    )
}

if (tables){
    createRoot(tables).render(
        <StrictMode>
            <Tables/>
        </StrictMode>
    )
}

