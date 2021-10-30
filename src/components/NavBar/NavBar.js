import React from 'react'
import { useContext } from 'react'
import { Nav } from 'react-bootstrap';
import { UserAuthContext } from '../../context/UserAuthContext'
import { CartWidget } from './CartWidget';
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(UserAuthContext);
    const handlesubmit = () => {
        setIsAuthenticated(false);
    }

    return (


        <header className="header">
            <div>
                <Nav>
                    <NavLink activeClassName={'activeLink'} exact to="/">Distrimax</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/Sierras">Sierras</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/Taladros">Taladros</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/contacto">Contactos</NavLink>
                    <Link to="/cart"><CartWidget /></Link>
                    { !isAuthenticated || <button onClick={handlesubmit} className="btn btn-primary my-2"> Salir</button> }
                </Nav>

            </div>
        </header >
    )

}