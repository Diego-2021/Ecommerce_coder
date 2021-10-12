import { Nav, NavDropdown, } from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import './NavBar.css'



export const NavBar = () => {
    return <>
        <Nav className=" header">
            <Nav.Item>
                <Nav.Link href="">Distrimax
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="">Productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="">Contactos</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Herramientas" id="nav-dropdown">
                <NavDropdown.Item >De Mesa</NavDropdown.Item>
                <NavDropdown.Item >De Mano</NavDropdown.Item>
                <NavDropdown.Item >Otras</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item  className ="widget">
                <CartWidget/> 
               </Nav.Item>
        </Nav>
    </>
}