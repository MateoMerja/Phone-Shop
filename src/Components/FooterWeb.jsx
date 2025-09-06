import React from "react";
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import { Container, Row,Col } from "react-bootstrap";
import img2 from '../images/logo.png'
const FooterWeb = () => {
  return (
    <Container fluid className="bg-dark text-white mt-5" style={{ position: 'fixed', bottom: '0', width: '100%',}}>
      <footer className="footer">
       <Row className="footer-container">
         <img src={img2} style={{ height: '170px', width: '180px' }} alt="logo" />
        <Col>
         <div className="footer-left">
           <h4>Company</h4>
           <ul className="company-links">
             <li><a href="#">About Us</a></li>
             <li><a href="#">Our Services</a></li>
             <li><a href="#">Privacy Policy</a></li>
             <li><a href="#">Review</a></li>
           </ul>
         </div>
        </Col>
        <Col>
         <div className="footer-middle">
           <h4>Products</h4>
           <ul className="products-links">
             <li><a href="#">About Us</a></li>
             <li><a href="#">Our Services</a></li>
             <li><a href="#">Privacy Policy</a></li>
             <li><a href="#">Affiliate Program</a></li>
           </ul>
         </div>
        </Col>
        <Col>
         <div className="footer-right">
          <h4>Social Media</h4>
          <div className="social-links">           
          <a href="#facebook" className="text-white mx-2"><img src={facebook} alt="Facebook" style={{ width:'40px', height:'35px'}}/></a>
          <a href="#twitter" className="text-white mx-2"><img src={twitter}style={{width:'50px', height:'40px'}} /></a>
          <a href="#instagram" className="text-white mx-2"><img src={instagram} style={{ width: '50px', height: '40px' }} /></a>
          </div>
         </div>
        </Col>
       </Row> 
       <hr/>
       <p className="paragraph">© {} LINETECH</p>
      </footer>
    </Container>    
  );
};

export default FooterWeb;
