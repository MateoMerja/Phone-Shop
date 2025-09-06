import React from 'react'
import { Navbar, Nav, Container, NavDropdown, FormControl, InputGroup } from 'react-bootstrap'
import img1 from '../images/logo.png'
import menu from '../images/menu.svg'
import searchIcon from '../images/search.svg'

const NavigationBar = () => {
     return (
    <Navbar expand="lg" className="backgCol">
      <Container fluid>
        <Navbar.Brand href="#home"><img src={img1} style={{ height: '170px', width: '180px' }} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
               {/* Butoni për hapje menuje në telefon */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src={menu} alt="Menu" style={{ width: "30px", height: "40px" }} />
        </Navbar.Toggle>

        {/* Menuja që mbyllet/hapet */}
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          {/* Kuti kërkimi */}
        <InputGroup className="me-3 custom-search my-2 my-md-0" style={{ maxWidth: '200px' }}>
            <FormControl placeholder="Search" aria-label="Search" />
            <InputGroup.Text>
              <img src={searchIcon} alt="search" style={{ width: '16px', height: '16px' }} />
            </InputGroup.Text>
          </InputGroup>
          <Nav className="ms-auto links" >
            <Nav.Link href="#home" className='link'>Home</Nav.Link>
            <Nav.Link href="#link" className='link'>About</Nav.Link>
            <Nav.Link href="#link" className='link'>Contact</Nav.Link>
            <NavDropdown title={<img src={menu} alt='Menu' style={{ width: "30px", height: "40px" }}/>}  id="basic-nav-dropdown"className='no-arrow menuStyle'align={"end"} >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar
