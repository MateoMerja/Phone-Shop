// src/Components/HomePage.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import iphoneCarousel from "../videos/iphone.mp4";
import laptopImg from "../images/laptopdown.png";
import samsung from "../images/samsung.png";
import smartwatchdown from "../images/smartwatchdown.png";
import "../Css/HomePage.css";


const HomePage =()=> {
  return (
    <div className="home-page">
      {/* Vetëm video iPhone */}
      <div className="carousel-container">
        <video
          src={iphoneCarousel}
          className="carousel-video"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="carousel-overlay"></div>
      </div>

      {/* Kategoritë Kryesore */}
      <Container className="categories-section my-5">
        <h2 className="text-center mb-4">Main Articles</h2>
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <Card className="category-card h-100">
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                  <div className="category-img-wrapper">
                    <Card.Img variant="top" src={laptopImg} className="category-img" />
                  </div>
                 <Card.Title>Laptops</Card.Title>
                 <Button variant="primary">Load More</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card className="category-card h-100">
           <Card.Body className="d-flex flex-column justify-content-between text-center">
  <div className="category-img-wrapper">
    <Card.Img variant="top" src={samsung} className="category-img" />
  </div>
  <Card.Title>Laptops</Card.Title>
  <Button variant="primary">Load More</Button>
</Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card className="category-card h-100">
             <Card.Body className="d-flex flex-column justify-content-between text-center">
  <div className="category-img-wrapper">
    <Card.Img variant="top" src={smartwatchdown} className="category-img" />
  </div>
  <Card.Title>Laptops</Card.Title>
  <Button variant="primary">Load More</Button>
</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HomePage;