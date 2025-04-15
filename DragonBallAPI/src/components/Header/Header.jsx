import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="contenedor-imagen">
                <img src='https://web.dragonball-api.com/images-compress/android-icon-192x192.webp' alt="Logo" />
            </div>
            <div className="contenedor-link">
                <Link to={"/"}>Inicio</Link>
                <Link to={"filter/Male"}>Hombre</Link>
                <Link to={"filter/Female"}>Mujer</Link>
            </div>
            </header>
    )
}

export default Header
