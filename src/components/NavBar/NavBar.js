import { Nav } from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'



export const NavBar = () => {
    return <>
        <Nav className=" header">

            <NavLink activeClassName={'activeLink'} exact to="/">Distrimax</NavLink>
            <NavLink activeClassName={'activeLink'} exact to="/productos/Sierras">Sierras</NavLink>
            <NavLink activeClassName={'activeLink'} exact to="/productos/Taladros">Taladros</NavLink>
            <NavLink activeClassName={'activeLink'} exact to="/contacto">Contactos</NavLink>
            <Link className="widget" to="/cart"><CartWidget /></Link>
        </Nav>
    </>

}