import React from 'react'
import { useContext } from 'react'
import { Nav } from 'react-bootstrap';
import { UserAuthContext } from '../../context/UserAuthContext'
import { CartWidget } from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../statics/logo192.jpg';


export const NavBar = () => {

    const { isAuthenticated, logout } = useContext(UserAuthContext);


    return (


        <header className="header">
            <div>
                <Nav ><img src={logo} alt="logo Distrimax"></img>
                    <NavLink activeClassName={'activeLink'} exact to="/">Home</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/Sierras">Sierras</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/Taladros">Taladros</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink>
                    <Link to="/cart"><CartWidget /></Link>
                    {!isAuthenticated || <button onClick={logout} className="btn btn-primary">Salir</button>}
                </Nav>
            </div>
        </header >
    );

};