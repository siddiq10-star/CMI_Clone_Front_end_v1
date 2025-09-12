import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Works() {
  const steps = [
    {
      icon: "bi-phone",
      title: "Check Price",
      text: "Choose the brand & provide your current phone condition in just a few steps. Our Smart System will suggest the best price for your old mobile.",
    },
    {
      icon: "bi-truck",
      title: "Free Pickup",
      text: "We’ll schedule a free doorstep pickup at your convenience. Our team ensures a smooth and hassle-free collection process.",
    },
    {
      icon: "bi-cash-stack",
      title: "Instant Payment",
      text: "Once your phone is verified, you’ll receive instant cash or bank transfer without any delays.",
    },
  ];

  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center fw-bold text-success">
              How CashMartIndia Works
            </h2>
            <p className="text-center text-muted">
              Simple, quick, and hassle-free process to sell your old devices
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {steps.map((step, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm border-0 text-center p-4 hover-card">
                <i
                  className={`bi ${step.icon} text-success mb-3`}
                  style={{ fontSize: "3rem" }}
                ></i>
                <Card.Body>
                  <Card.Title className="fw-bold">{step.title}</Card.Title>
                  <Card.Text className="text-muted">{step.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom Hover Effect */}
      <style>
        {`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 15px;
          }
          .hover-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </section>
  );
}

export default Works;
