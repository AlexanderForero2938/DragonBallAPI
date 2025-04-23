import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

const Header = () => {
    return (
        <header>
            <div className="contenedor-imagen">
                <img src='https://web.dragonball-api.com/images-compress/android-icon-192x192.webp' alt="Logo" />
            </div>
            <div className="contenedor-link">
                <Link to="/" className='enlace principal'>Inicio
                </Link>
                <Link to={"filter/Male"} className='enlace principal'>Hombre
                </Link>
                <Link to={"filter/Female"} className='enlace principal'>Mujer
                </Link>
                <Link to={"acercade"} className='enlace principal'>Acerca de
                </Link>

                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button variant="contained" {...bindTrigger(popupState)} className="dashboard-button">
                                Menú
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>
                                    <Link to="/" className='enlace'>Inicio</Link>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <Link to="filter/Male" className='enlace'>Hombre</Link>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <Link to="filter/Female" className='enlace'>Mujer</Link>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                <Link to={"acercade"} className='enlace'>Acerca de</Link>
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </div>
        </header>
    )
}

export default Header
