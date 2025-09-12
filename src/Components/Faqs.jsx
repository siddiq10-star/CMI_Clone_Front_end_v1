import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

function FAQs() {
  const faqs = [
    {
      question: "How does CashMartIndia determine my phone’s price?",
      answer:
        "Our smart system evaluates the brand, model, and condition of your device. Based on market value and demand, we suggest the best possible price instantly.",
    },
    {
      question: "Is the pickup service really free?",
      answer:
        "Yes! We offer free doorstep pickup across multiple cities, so you don’t need to worry about delivery charges.",
    },
    {
      question: "When will I get my payment?",
      answer:
        "You’ll receive instant cash or a bank transfer as soon as our team verifies your device at the time of pickup.",
    },
    {
      question: "What happens if my phone’s condition doesn’t match?",
      answer:
        "If the actual condition differs, our team will provide a revised price on the spot. You can accept or decline without any obligation.",
    },
    {
      question: "Do you accept devices other than mobile phones?",
      answer:
        "Yes, we also buy laptops, tablets, and other electronic gadgets. Our platform keeps expanding to include more categories.",
    },
  ];

  return (
    <section className="bg-white py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center fw-bold text-success">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted">
              Find answers to the most common questions about our service
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Accordion defaultActiveKey="0" alwaysOpen>
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body className="text-muted">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .accordion-button:not(.collapsed) {
            background-color: #d1f7d6 !important;
            color: #198754 !important;
            font-weight: 600;
          }
          .accordion-button {
            border-radius: 8px !important;
            box-shadow: none !important;
          }
          .accordion-item {
            margin-bottom: 10px;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #e6e6e6;
          }
        `}
      </style>
    </section>
  );
}

export default FAQs;
