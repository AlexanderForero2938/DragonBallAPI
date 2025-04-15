import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CustomCard from '../../components/CustomCard/CustomCard'
import TransformationsCard from "../../components/TransformationsCard/TransformationsCard";
import './DetailsPage.css'

const DetailsPage = () => {

    const [personaje, setPersonaje] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters/' + id)
            .then(response => response.json())
            .then(json => setPersonaje(json))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <>
            <main>
                <CustomCard
                    key={personaje.id}
                    img={personaje.image}
                    name={personaje.name}
                    race={personaje.race}
                    gender={personaje.gender}
                    ki={personaje.ki}
                    maxKi={personaje.maxKi}
                    affiliation={personaje.affiliation}
                />
            </main>
            {personaje.transformations && personaje.transformations.length > 0 && (
    <div className="transformaciones-container">
        {personaje.transformations.map((transformacion) => (
            <TransformationsCard
                key={transformacion.id}
                img={transformacion.image}
                name={transformacion.name}
                ki={transformacion.ki}
            />
        ))}
    </div>
)}

        </>
    );
}

export default DetailsPage;
