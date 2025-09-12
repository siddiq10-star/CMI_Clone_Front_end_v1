// src/Components/DownloadApp.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import appMockup from "../assets/app-mockup.jpg";
import appStore from "../assets/appstore.png"; // App Store logo
import googlePlay from "../assets/googleplay.png"; // Google Play logo

function DownloadApp() {
  return (
    <section className="py-5 bg-success text-light position-relative overflow-hidden">
      <Container>
        <Row className="align-items-center">
          {/* Left: Text */}
          <Col md={6} className="mb-4 mb-md-0">
            <motion.h2
              className="fw-bold display-5"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Get the App & Start Selling Instantly
            </motion.h2>
            <motion.p
              className="lead mt-3"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Download our mobile app to browse products, sell your gadgets, and
              stay updated on the go!
            </motion.p>
            <motion.div
              className="d-flex gap-3 mt-4"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button
                variant="light"
                className="d-flex align-items-center gap-2 px-3 py-2 fw-bold text-success"
                style={{ borderRadius: "12px" }}
              >
                <img
                  src={appStore}
                  alt="App Store"
                  style={{ height: "24px" }}
                />
                App Store
              </Button>
              <Button
                variant="light"
                className="d-flex align-items-center gap-2 px-3 py-2 fw-bold text-success"
                style={{ borderRadius: "12px" }}
              >
                <img
                  src={googlePlay}
                  alt="Google Play"
                  style={{ height: "24px" }}
                />
                Google Play
              </Button>
            </motion.div>
          </Col>

          {/* Right: App Mockup */}
          <Col md={6} className="text-center">
            <motion.img
              src={appMockup}
              alt="App Mockup"
              className="img-fluid shadow-lg rounded-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ maxHeight: "400px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Decorative Circles */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          top: "-50px",
          right: "-50px",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          bottom: "-50px",
          left: "-50px",
          zIndex: 0,
        }}
      ></div>
    </section>
  );
}

export default DownloadApp;
