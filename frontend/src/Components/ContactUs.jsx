import React,{useState} from "react";
import axios from "axios"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import facebook from '../images/facebook.png'; 
import instagram from '../images/instagram.png'; 
import tiktok from '../images/tiktok.png'; 
import whatsapp from '../images/whatsapp.png'; 
import gmail from '../images/gmail.png';
import map from '../images/map.png';  
import "../Css/ContactUs.css";

const ContactUs =()=> {
  const [contact,setContact]=useState({
    firstName:"",
    email:"",
    subject:"",
    message:"",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/addContact", contact)
      .then((res) => console.log("Added contact"))
      .catch((err) => console.log("Not added contact"));
  };
  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value});
  }

  return (
    <div className="contact-section py-5">
      <Container>
        <Row className="g-4">
          {/* Left side info */}
          <Col lg={5}>
            <Card className="h-100 contact-card text-white shadow">
              <Card.Body className="d-flex flex-column justify-content-between p-4 p-md-5">
                <div className="fade-in">
                  <h2 className="fw-bold mb-3">Contact Us</h2>
                  <p className="mb-4 opacity-75">Send a message</p>

                  <div className="mb-3 d-flex align-items-start gap-3">
                    <img src={gmail} style={{ height: '45px', width: '50px' }}/>
                    <div>
                      <small className="d-block opacity-75">Email</small>
                      <span className="fw-semibold">hello@yourcompany.com</span>
                    </div>
                  </div>

                  <div className="mb-3 d-flex align-items-start gap-3">
                      <img src={whatsapp} style={{ height: '45px', width: '50px' }}/>
                    <div>
                      <small className="d-block opacity-75">WhatsApp</small>
                      <span className="fw-semibold">+355 69 000 0000</span>
                    </div>
                  </div>

                  <div className="mb-3 d-flex align-items-start gap-3">
                       <img src={map} style={{ height: '45px', width: '50px' }}/>
                    <div>
                      <small className="d-block opacity-75">Adress</small>
                      <span className="fw-semibold">Tirana, Albania</span>
                    </div>
                  </div>
                </div>

                <div className="fade-in delay-2">
                  <p className="small opacity-75 mb-2">Follow us on social media</p>
                  <div className="d-flex gap-3">
                    <a href="#facebook"><img src={facebook} alt="Facebook" style={{ width:'40px', height:'39px' }}/></a> 
                    <a href="#instagram"><img src={instagram} style={{ width: '50px', height: '43px' }} /></a> 
                    <a href="#tiktok"><img src={tiktok} style={{ width: '55px', height: '45px' }} /></a> 
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right side form */}
          <Col lg={7}>
            <Card className="shadow border-0 h-100 slide-up">
              <Card.Body className="p-4 p-md-5">
                <h3 className="fw-semibold mb-3">Contact Us</h3>
                <p className="text-muted small mb-4">Fill out the fields</p>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col sm={6}>
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="firstName" value={contact.firstName} required />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={contact.email} required  />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" value={contact.subject}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={5}  value={contact.message} required />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center">
                    <Button type="submit" className="btn-animate">Send</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ContactUs;