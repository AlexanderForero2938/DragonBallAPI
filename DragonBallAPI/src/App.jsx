import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import CustomCard from './components/CustomCard/CustomCard'

function App() {
  const [personaje, setPersonaje] = useState([])

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=58')
      .then(res => res.json())
      .then(data => setPersonaje(data.items));
  }, []);

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <main>
        {personaje.map((item) =>
          <CustomCard key={item.id} img={item.image} name={item.name} race={item.race} gender={item.gender}
            ki={item.ki} />
        )}
      </main>
    </>
  )
}

export default App
