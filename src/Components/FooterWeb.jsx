import React from "react"; 
import { Container, Row, Col } from "react-bootstrap"; 
import facebook from '../images/facebook.png'; 
import twitter from '../images/twitter.png'; 
import instagram from '../images/instagram.png'; 
import tiktok from '../images/tiktok.png'; 
import img2 from '../images/logo.png'; 
import '../Css/FooterCss.css';
const FooterWeb = () => { 
  return ( 
  <Container fluid className="bg-dark text-white mt-5" style={{ position: 'fixed', bottom: '0', width: '100%',}}>
     <footer className="footer mt-auto"> 
      <Row className="footer-container d-flex"> 
        <Col xs={12} md={3} className="text-center text-md-start"> 
        <img src={img2} style={{ height: '170px', width: '180px' }} alt="logo" /> 
        </Col> 
        <Col xs={12} md={3}> 
          <div className="footer-left"> 
           <h4>About Us</h4>
            <ul className="/company-links"> 
             <li><a href="/refund-policy">Refund Policy</a></li>
             <li><a href="/privacy-policy">Privacy Policy</a></li>
             <li><a href="/terms-of-service">Terms of Service</a></li>
             <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </Col> 
        <Col xs={12} md={3}>
          <div className="footer-middle">
             <h4>Products</h4> 
              <ul className="products-links"> 
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Desktops</a></li>
                <li><a href="#">Monitors</a></li>
                <li><a href="#">Accessories</a></li>
              </ul> 
          </div> 
        </Col> 
        <Col xs={12} md={3}> 
          <div className="footer-right"> 
           <h4>Social Media</h4> 
            <div className="social-links"> 
             <a href="#facebook"><img src={facebook} alt="Facebook" style={{ width:'40px', height:'35px' }}/></a> 
             <a href="#twitter"><img src={twitter} style={{ width:'50px', height:'40px'}} /></a> 
             <a href="#instagram"><img src={instagram} style={{ width: '50px', height: '40px' }} /></a> 
             <a href="#tiktok"><img src={tiktok} style={{ width: '55px', height: '45px' }} /></a> 
            </div> 
          </div> 
        </Col> 
      </Row> 
      <hr/> 
      <p className="paragraph">© {new Date().getFullYear()} LINETECH</p></footer> 
    </Container>
  ); 
}; 
export default FooterWeb;