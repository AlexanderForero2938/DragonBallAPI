import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CustomCard from '../../components/CustomCard/CustomCard'
import TransformationsCard from "../../components/TransformationsCard/TransformationsCard";
import PDescription from "../../components/PDescription/PDescription";
import H2Subtitulo from "../../components/H2Subtitulo/H2Subtitulo";
import NavBar from "../../components/NavBar/NavBar";
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
            <main id="informacion-principal">
                <div className="card">
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
                </div>
                {/* <div className="descripcion">
                    <H2Subtitulo>
                        Descripción:
                    </H2Subtitulo>
                    <PDescription
                        descripcion={personaje.description} />
                    {personaje.originPlanet && personaje.originPlanet.name && (
                        <>
                            <H2Subtitulo>
                                Planeta Origen:
                            </H2Subtitulo>
                            <PDescription descripcion={personaje.originPlanet.name} />
                        </>
                    )}
                </div> */}
            </main>
            {personaje.transformations && personaje.transformations.length > 0 && (
                <div id="transformaciones-container">
                    <div id="titulo">
                        <H2Subtitulo>
                            Transformaciones
                        </H2Subtitulo>
                    </div>
                    <div id="transformacion">
                        {personaje.transformations.map((transformacion) => (
                            <TransformationsCard
                                key={transformacion.id}
                                img={transformacion.image}
                                name={transformacion.name}
                                ki={transformacion.ki}
                            />
                        ))}
                    </div>

                </div>
            )}

        </>
    );
}

export default DetailsPage;
