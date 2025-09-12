import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="cta-section text-white py-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={8}>
            <motion.h2
              className="fw-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Sell Your Device?
            </motion.h2>
            <motion.p
              className="lead mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get the best price for your old gadgets instantly. Fast, secure,
              and hassle-free process.
            </motion.p>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-md-end justify-content-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                variant="light"
                size="lg"
                className="fw-bold text-success shadow-sm cta-btn"
              >
                Check Price Now →
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .cta-section {
            background: linear-gradient(135deg, #198754, #0f5132);
            border-radius: 20px;
            margin: 40px auto;
            max-width: 90%;
          }
          .cta-btn {
            border-radius: 50px;
            padding: 12px 28px;
            transition: all 0.3s ease;
          }
          .cta-btn:hover {
            background: #198754 !important;
            color: #fff !important;
          }
        `}
      </style>
    </section>
  );
}

export default CTA;
