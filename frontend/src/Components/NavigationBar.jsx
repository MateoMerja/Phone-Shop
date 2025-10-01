import React, { useState } from "react";
import { Navbar, Container, InputGroup, FormControl, Nav } from "react-bootstrap";
import img1 from "../images/logo.png";
import menu from "../images/menu.svg";
import closeIcon from "../images/close.png";
import searchIcon from "../images/search.svg";
import cart from "../images/shopping-cart.png"
import user from "../images/userNav.png"
import "../Css/NavigationCss.css";
const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setMenuOpen(true);
    setClosing(false);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 500); 
  };

  return (
    <>
      <Navbar className="backgCol">
        <Container fluid className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={img1}
              alt="logo"
              className="navbar-logo"
              style={{ height: "170px", width: "180px" }}
            />
          </Navbar.Brand>
          {/* Nav + Search (desktop/tablet/laptop) */}
          <Nav className="ms-auto links d-flex align-items-center">
            <InputGroup className="me-3 custom-search" style={{ maxWidth: "200px" }}>
              <FormControl placeholder="Search" aria-label="Search" />
              <InputGroup.Text>
                <img src={searchIcon} alt="search" style={{ width: "16px", height: "16px" }} />
              </InputGroup.Text>
            </InputGroup>
            <Nav.Link href="/login" className="link">
              Log In
            </Nav.Link>
            <Navbar.Brand href="/cart" className="d-flex align-items-center">
              <img
               src={cart}
               alt="logo"
               className="cart-img"
               style={{ height: "25px", width: "30px", }}
              />
          </Navbar.Brand>
          </Nav>

          {/* Burger menu gjithmonë i dukshëm */}
          <button className="custom-menu-btn" onClick={handleOpen}>
            <img src={menu} alt="Menu" style={{ width: "30px", height: "30px" }} />
          </button>
        </Container>
      </Navbar>

      {/* Sidebar + Overlay */}
      {menuOpen && (
        <div
          className={`sidebar-overlay ${closing ? "closing" : ""}`}
          onClick={handleClose}
        >
          <div
            className={`sidebar-menu ${closing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menu-header">
              <h5>Menu</h5>
              <button className="close-btn" onClick={handleClose}>
                <img src={closeIcon} alt="close" />
              </button>
            </div>

            <ul className="menu-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact-us">Contact</a></li>
              <li><a href="/login">Log In</a></li>
              <li><a href="#">Phones</a></li>
              <li><a href="#">Tablets</a></li>
              <li><a href="#">Laptops</a></li>
            </ul>           
            <div className="menu-search">
              <InputGroup>
                <FormControl placeholder="Search" aria-label="Search" />
                <InputGroup.Text>
                  <img src={searchIcon} alt="search" style={{ width: "16px", height: "16px" }} />
                </InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
