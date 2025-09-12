import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

function Stats() {
  const stats = [
    {
      icon: "bi-phone",
      value: "10,000+",
      label: "Devices Sold",
    },
    {
      icon: "bi-currency-rupee",
      value: "₹50 Cr+",
      label: "Cash Paid",
    },
    {
      icon: "bi-people",
      value: "1,00,000+",
      label: "Happy Customers",
    },
    {
      icon: "bi-star-fill",
      value: "4.9/5",
      label: "Customer Rating",
    },
  ];

  // Framer Motion variants
  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-success bg-opacity-10 py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <motion.h2
              className="fw-bold text-success"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Achievements
            </motion.h2>
            <motion.p
              className="text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Numbers that showcase our journey and customer trust
            </motion.p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          {stats.map((stat, index) => (
            <Col md={3} sm={6} xs={12} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={statVariants}
                viewport={{ once: true }}
                className="stat-card p-4 rounded shadow-sm bg-white"
              >
                <i
                  className={`bi ${stat.icon} text-success mb-2`}
                  style={{ fontSize: "2.5rem" }}
                ></i>
                <h3 className="fw-bold text-dark">{stat.value}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .stat-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .stat-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 28px rgba(0,0,0,0.12);
          }
        `}
      </style>
    </section>
  );
}

export default Stats;
