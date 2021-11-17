import React from 'react'
import { useContext } from 'react'
import { Nav } from 'react-bootstrap';
import { UserAuthContext } from '../../context/UserAuthContext'
import { CartWidget } from './CartWidget';
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {

    const { isAuthenticated, logout } = useContext(UserAuthContext);


    return (


        <header className="header">
            <div>
                <Nav >
                    <NavLink activeClassName={'activeLink'} exact to="/">Distrimax</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/Sierras">Sierras</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/Taladros">Taladros</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink>
                    <Link to="/cart"><CartWidget /></Link>
                    {!isAuthenticated || <button onClick={logout} className="btn btn-primary "> Salir</button>}
                </Nav>
            </div>
        </header >
    );

};