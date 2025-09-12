import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pt-5 pb-4 bg-success bg-opacity-10">
      <Container fluid>
        <Row className="mb-5">
          {/* Logo & About */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <img
              src={logo}
              alt="CashMart India Logo"
              className="footer-logo mb-3"
            />
            <p className="">
              CashMart India is your one-stop shop to sell old gadgets online –
              Mobiles, tablets, laptops, smartwatches, & smart TVs. Book a free
              pickup.
            </p>
            <div className="d-flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="social-icon d-flex align-items-center justify-content-center"
                    aria-label={`Link to social media ${i + 1}`}
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </Col>

          {/* Services */}
          <Col lg={2} md={6} sm={6} className="mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              {[
                "Sell Laptop",
                "Sell Tablet",
                "Sell iMac",
                "Sell DSLR",
                "Sell Smart Watch",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-decoration-none footer-link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Devices */}
          <Col lg={2} md={6} sm={6} className="mb-4">
            <h5>Devices</h5>
            <ul className="list-unstyled">
              {["Laptop", "Tablet", "iMac", "DSLR", "Smart Watch"].map(
                (device, i) => (
                  <li key={i}>
                    <Link
                      to={`/devices/${device.toLowerCase().replace(/ /g, "-")}`}
                      className="text-decoration-none footer-link"
                    >
                      {device}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </Col>

          {/* Company */}
          <Col lg={2} md={6} sm={6} className="mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled link-success">
              {[
                "About",
                "Contact",
                "Blog",
                "Become a Partner",
                "Help & Support",
                "Terms & Conditions",
                "Privacy Policy",
                "Cookie Policy",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-decoration-none footer-link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={2} md={6} sm={6} className="mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>📞 +91 88848 34848</li>
              <li>📧 sell@cashmartindia.in</li>
              <li>💬 Chat with us</li>
              <li>🕒 24/7 Support</li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center small">
            <p>
              All product names, logos, and brands are property of their
              respective owners.
            </p>
            <p>&copy; 2025 CashMart India. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
