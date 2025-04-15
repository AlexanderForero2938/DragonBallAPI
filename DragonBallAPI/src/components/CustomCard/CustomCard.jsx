import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CustomCard.css';

const CustomCard = (props) => {
    return (
        <Card id='tarjeta' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <div id='imagen-fondo'>
                <CardMedia
                    component="img"
                    image={props.img}
                />
                </div>
                <CardContent>
                    <div id='informacion-personaje'>
                        <Typography>
                            <p id='nombre-personaje' className='sobreponer'>
                                {props.name}</p>
                        </Typography>
                        <Typography>
                            <p className='informacion-color dimension sobreponer'>
                                {props.race} - {props.gender}
                            </p>
                        </Typography>
                        <Typography>
                            <p className='subtitulo-color dimension '>Base KI:</p>
                            <p className='informacion-color dimension'>{props.ki}</p>
                        </Typography>
                        <Typography>
                            <p className='subtitulo-color dimension'>Total KI:</p>
                            <p className='informacion-color dimension'>{props.maxKi}</p>
                        </Typography>
                        <Typography>
                            <p className='subtitulo-color dimension'>Afilliation:</p>
                            <p className='informacion-color dimension'>{props.affiliation}</p>
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CustomCard
