import React from "react";
import "../Css/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>About Us</h1>
        <p>
          We are an online store specialized in electronic devices such as
          smartphones, computers, and accessories.
        </p>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="history-text">
          <h2>Our Story</h2>
          <p>
            Our company started in 2015 as a small local shop. Today, we have
            grown into a trusted online platform that delivers the latest
            technology across the country.
          </p>
        </div>
        <div className="history-img">
          {/* Example: <img src={storeImg} alt="Our Store" /> */}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide customers with the latest technology at
          affordable prices, while offering excellent customer service. We
          believe everyone deserves access to devices that make life smarter and
          easier.
        </p>
      </section>

      {/* What We Offer */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <div className="offer-grid">
          <div className="offer-card">
            {/* Example: <img src={phoneIcon} alt="Phone" /> */}
            <h3>Smartphones</h3>
            <p>
              Latest smartphones from the most popular brands, with warranty and
              competitive prices.
            </p>
          </div>
          <div className="offer-card">
            {/* Example: <img src={laptopIcon} alt="Laptop" /> */}
            <h3>Computers</h3>
            <p>
              Laptops and PCs for work, study, and gaming, equipped with the
              newest technology.
            </p>
          </div>
          <div className="offer-card">
            {/* Example: <img src={headphonesIcon} alt="Accessories" /> */}
            <h3>Accessories</h3>
            <p>
              Headphones, keyboards, chargers, smart home devices and much more.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="whyus-section">
        <h2>Why Choose Us?</h2>
        <div className="whyus-grid">
          <div className="whyus-card">
            {/* Example: <img src={starIcon} alt="Quality" /> */}
            <h3>Guaranteed Quality</h3>
            <p>Original products with warranty and technical support.</p>
          </div>
          <div className="whyus-card">
            {/* Example: <img src={usersIcon} alt="Clients" /> */}
            <h3>Satisfied Customers</h3>
            <p>
              Over 10,000 customers have trusted us for their electronic
              purchases.
            </p>
          </div>
          <div className="whyus-card">
            {/* Example: <img src={priceIcon} alt="Price" /> */}
            <h3>Competitive Prices</h3>
            <p>The latest technology with the best deals in the market.</p>
          </div>
        </div>
      </section>
      {/* Our Team Section */}
<section className="team-section py-5 bg-light">
  <div className="container text-center">
    <h2 className="mb-4">Meet Our Team</h2>
    <div className="row justify-content-center">

      {/* Team Member 1 */}
      <div className="col-sm-12 col-md-4 mb-4">
        <div className="card h-100 shadow-sm border-0">
          {/* Example: <img src={ceoImg} className="card-img-top" alt="CEO" /> */}
          <div className="card-body">
            <h5 className="card-title">Arben Hoxha</h5>
            <h6 className="card-subtitle mb-2 text-muted">CEO</h6>
            <p className="card-text">
              Passionate about technology and leading the company to success.
            </p>
          </div>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="col-sm-12 col-md-4 mb-4">
        <div className="card h-100 shadow-sm border-0">
          {/* Example: <img src={marketingImg} className="card-img-top" alt="Marketing Director" /> */}
          <div className="card-body">
            <h5 className="card-title">Elira Dervishi</h5>
            <h6 className="card-subtitle mb-2 text-muted">Marketing Director</h6>
            <p className="card-text">
              Focused on connecting our brand with customers worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="col-sm-12 col-md-4 mb-4">
        <div className="card h-100 shadow-sm border-0">
          {/* Example: <img src={supportImg} className="card-img-top" alt="Customer Support" /> */}
          <div className="card-body">
            <h5 className="card-title">Kreshnik Meta</h5>
            <h6 className="card-subtitle mb-2 text-muted">Customer Support Manager</h6>
            <p className="card-text">
              Dedicated to ensuring every customer has a smooth experience.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
