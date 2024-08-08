import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

import { NavLink, Outlet} from 'react-router-dom';



function Dashborad() {



  return (
    <div>
    <Navbar style={{marginBottom:"50px"}} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="#home">Wellcome to the Dashborad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft:"500px"}} className="me-auto">
          
            <NavLink style={{marginRight:"50px"}}  to='login'>LOGIN </NavLink>
            <NavLink to='signup'>SIGNUP</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    <Outlet/>
    </div>
  );
}

export default Dashborad;
