import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="contenedor-imagen">
                <img src='https://web.dragonball-api.com/images-compress/android-icon-192x192.webp' alt="Logo" />
            </div>

            <div className="contenedor-link">
                <a>Inicio</a>
                <a>Masculino</a>
                <a>Femenino</a>
            </div>
        </header>
    )
}

export default Header
