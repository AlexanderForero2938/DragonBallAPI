import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

import CharacterCard from '../../components/CharacterCard/CharacterCard';

import './HomePage.css'

const HomePage = () => {

  const [personaje, setPersonaje] = useState([])

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=58')
      .then(res => res.json())
      .then(data => setPersonaje(data.items))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


    return (
    <main>
        {
            personaje.map((item) => (
                <Link to={`/details/${item.id}`} key={item.id}>
                    <CharacterCard
                        key={item.id} 
                        img={item.image}
                        name={item.name}
                        race={item.race}
                        gender={item.gender}
                    />
                </Link>
            ))
        }
    </main>
)
}

export default HomePage
