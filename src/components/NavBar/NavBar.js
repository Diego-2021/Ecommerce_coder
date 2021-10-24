import React from 'react'
import { Nav } from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {
    return(
    <header className="header">
        <div>
            <Nav>
                <NavLink activeClassName={'activeLink'} exact to="/">Distrimax</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/productos/Sierras">Sierras</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/productos/Taladros">Taladros</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/contacto">Contactos</NavLink>
                <Link  to="/cart"><CartWidget /></Link>
            </Nav>

        </div>
        </header >
    )

}