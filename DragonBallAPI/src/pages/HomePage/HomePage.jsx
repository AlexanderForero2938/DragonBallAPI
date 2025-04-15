import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

import CustomCard from '../../components/CustomCard/CustomCard';

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
                    <CustomCard
                        key={item.id} 
                        img={item.image}
                        name={item.name}
                        race={item.race}
                        gender={item.gender}
                        ki={item.ki} 
                        maxKi={item.maxKi} 
                        affiliation={item.affiliation}
                    />
                </Link>
            ))
        }
    </main>
)
}

export default HomePage
