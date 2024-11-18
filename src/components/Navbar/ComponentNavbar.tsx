import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from './Navbar.module.css';

const ComponentNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" className={`${styles.navbar1}`} >
      <Container >
        <Navbar.Brand href="/home">
          <div className={`${styles.img_circle_logo}`} >
            <div className={`${styles.img_logo}`} ></div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav" className={`justify-content-end`} >
          <Nav className="p-3">
            <Nav.Link href="/home" className={`nav-link active text-white`} >
              Inicio
            </Nav.Link>
            <Nav.Link href="/quienes-somos" className={`nav-link text-white`} >
              ¿Quienes somos?
            </Nav.Link>
            <Nav.Link href="/productos" className={`nav-link text-white`} >
              Productos
            </Nav.Link>
            <Nav.Link href="/contacto" className={`nav-link text-white`} >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ComponentNavbar;
