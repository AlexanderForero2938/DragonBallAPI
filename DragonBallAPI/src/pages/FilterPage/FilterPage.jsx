import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import CustomCard from '../../components/CustomCard/CustomCard'

const FilterPage = () => {
    let { genero } = useParams()

    const [personaje, setPersonaje] = useState([])

    useEffect(() => {
        const fetchPersonaje = async () => {
            fetch('https://dragonball-api.com/api/characters?limit=58')
                .then(response => response.json())
                .then(json => {
                    const filtered = json.items.filter((item) => item.gender === genero)
                    setPersonaje(filtered)
                })
                .catch(error => console.error('Error fetching data:', error))
        }
        fetchPersonaje()
    }, [genero])

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

export default FilterPage
