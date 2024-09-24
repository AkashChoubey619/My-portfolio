import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const checkForm = () => {
    const { firstName, email, phone, message } = formDetails;
    // Simple validation logic for all fields
    if (!firstName  || !email || !phone || !message) {
      return false;
    }
  
    return true;
  };

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    if(checkForm()){
    emailjs.send('service_g2w32uc', 'template_e1jrrql', formDetails,'fxZgAeiRnVenTa_e5').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text,formDetails);
        if (response.status == 200) {
            setStatus({ success: true, message: 'Message sent successfully'});

          } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.'});
          }
          
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
    setButtonText("Send");
  }else{
    console.log(checkForm,formInitialDetails,'checkForm',formDetails)
    setStatus({ success: false, message: 'Fill form properly'});
    setButtonText("Send")
  }
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: 'Message sent successfully'});
    // } else {
    //   setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    // }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="user_phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="user_message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit">
                      <span>{buttonText}</span>
                      </button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
