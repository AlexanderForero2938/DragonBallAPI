import { useState } from "react"
import './AcercaDePage.css'

const AcercaDePage = () => {
  return (
    <main id='main-acercaDe'>
      <div id="informacion">
      <p id='parrafo'>
          La API de Dragon Ball permite acceder a información sobre personajes,
          transformaciones y más. Esta API proporciona datos detallados sobre los personajes del universo Dragon Ball,
          como su raza, género, poder de combate y transformaciones.
        </p>
        <p className="informacion-integrantes">
          Elaborado Por:
        </p>
        <p className='informacion-integrantes'>
          Jhon Alexander Moreno Forero
        </p>
        <p className="informacion-integrantes">
          Jorge Eliecer Castro Gavirira
        </p>
        <p className="informacion-integrantes">
          Estudiantes De Ingenieria De Sistemas
          Universidad De La Amazonia
        </p>
      </div>

    </main>

  )
}

export default AcercaDePage
