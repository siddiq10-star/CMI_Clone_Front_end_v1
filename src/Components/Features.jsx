import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "bi-cash-stack",
      title: "Instant Cash",
      text: "Get paid instantly via cash or bank transfer as soon as your device is verified.",
    },
    {
      icon: "bi-truck",
      title: "Free Doorstep Pickup",
      text: "We provide hassle-free, free pickup at your convenience – no extra cost.",
    },
    {
      icon: "bi-shield-check",
      title: "Safe & Secure",
      text: "100% safe process with secure data handling and professional staff.",
    },
    {
      icon: "bi-headset",
      title: "24/7 Support",
      text: "Our support team is available round the clock to assist you anytime.",
    },
  ];

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <motion.h2
              className="text-center fw-bold text-success"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              className="text-center text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We make selling your devices simple, fast, and reliable
            </motion.p>
          </Col>
        </Row>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
              >
                <Card className="feature-card text-center p-4 shadow-sm border-0 h-100">
                  <div className="icon-wrapper mx-auto mb-3">
                    <i
                      className={`bi ${feature.icon}`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">{feature.title}</Card.Title>
                    <Card.Text className="text-muted small">
                      {feature.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom Styling */}
      <style>
        {`
          .feature-card {
            border-radius: 18px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            background: white;
          }
          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
          }
          .icon-wrapper {
            background: #d1f7d6;
            color: #198754;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 2rem;
          }
        `}
      </style>
    </section>
  );
}

export default WhyChooseUs;
