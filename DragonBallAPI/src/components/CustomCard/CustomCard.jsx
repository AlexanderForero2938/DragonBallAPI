import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CustomCard.css'

const CustomCard = (props) => {
    return (
        <Card id='tarjeta' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    //height="140"
                    image={props.img}
                />
                <CardContent>
                    <Typography id='nombre-personaje'>
                        {props.name}
                    </Typography>
                    <Typography className='informacion'>
                        <p className='informacion'>{props.race} - {props.gender}</p>
                    </Typography>
                    <Typography>
                        <p className='subtitulo'>Base KI:</p>
                    </Typography>
                    <Typography className='informacion'>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CustomCard
