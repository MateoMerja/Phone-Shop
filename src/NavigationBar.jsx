import React from 'react'
import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap'
import img1 from './images/logo.png'
const NavigationBar = () => {
  return (
    <div>
      <Navbar className="backgCol" >
      <Container fluid>
        <Nav.Link href="#home"><img src={img1}  style={{height:'160px', width:'200px', marginTop:'10px'}}></img></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navText'>
          <Nav className="ms-auto" >
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar