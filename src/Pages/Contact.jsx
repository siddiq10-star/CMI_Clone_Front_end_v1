import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(to right, #007bff, #00d4ff)",
          color: "#fff",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 className="display-4 fw-bold">Get in Touch</h1>
        <p className="lead mt-3 fs-5">
          Have questions? We’re here to help! Contact us and we’ll respond
          promptly.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="py-5" style={{ background: "#f0f4f8" }}>
        <Container>
          <Row className="g-4 justify-content-center">
            {/* Contact Info */}
            <Col md={4} className="glass-card p-4 text-center">
              <FaPhoneAlt size={30} className="mb-3 text-primary" />
              <h5>Call Us</h5>
              <p>+91 88848 34848</p>

              <FaEnvelope size={30} className="mb-3 mt-4 text-primary" />
              <h5>Email</h5>
              <p>sell@cashmartindia.in</p>

              <FaMapMarkerAlt size={30} className="mb-3 mt-4 text-primary" />
              <h5>Location</h5>
              <p>Bengaluru, India</p>
            </Col>

            {/* Contact Form */}
            <Col md={6} className="glass-card p-4">
              <h3 className="mb-4 text-center">Send Us a Message</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Type your message..."
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map / CTA Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h3 className="mb-4">Find Us on Map</h3>
        <div
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sBengaluru!5e0!3m2!1sen!2sin!4v1690000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Bengaluru Map"
          ></iframe>
        </div>
      </section>

      {/* Glassmorphism & Styling */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .form-control:focus {
          border-color: #007bff;
          box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Contact;
