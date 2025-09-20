// src/Components/HomePage.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import iphoneCarousel from "../videos/iphone.mp4";
import laptopCarousel from "../videos/laptop.mp4";
import aksesorCarousel from "../videos/aksesor.mp4";
import laptopImg from "../images/laptopdown.png";
import samsung from "../images/samsung.png";
import "../Css/HomePage.css";
import smartwatchdown from "../images/smartwatchdown.png";
const videos = [iphoneCarousel, laptopCarousel, aksesorCarousel];

const HomePage =()=> {
  const [current, setCurrent] = useState(0);

  // Auto-levizja e Carousel-it
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Carousel me video dhe overlay estetik */}
      <div className="carousel-container">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === current ? "active" : ""}`}
          >
            <video
              src={video}
              className="carousel-video"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Overlay i lehtë */}
            <div className="carousel-overlay"></div>
          </div>
        ))}
      </div>

      {/* Kategoritë Kryesore */}
      <Container className="categories-section my-5">
        <h2 className="text-center mb-4">Main Articles</h2>
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <Card className="category-card h-100">
              <Card.Body className="d-flex flex-column justify-content-between  text-center">
                <Card.Img variant="top" src={laptopImg}   className="mx-auto d-block" style={{width:'400px', height:'250px',alignItems:'center'}} />
                <Card.Title>Laptops</Card.Title>
                <Button variant="primary">Load More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card className="category-card h-100">
              <Card.Body className="d-flex flex-column justify-content-between  text-center">
                <Card.Img variant="top" src={samsung}   className="mx-auto d-block" style={{width:'300px', height:'250px'}}/>
                <Card.Title>Phones</Card.Title>
                <Button variant="primary">Load More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card className="category-card h-100">
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                 <Card.Img variant="top" src={smartwatchdown}   className="mx-auto d-block" style={{width:'300px', height:'250px'}}/>
                <Card.Title>Accessories</Card.Title>
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