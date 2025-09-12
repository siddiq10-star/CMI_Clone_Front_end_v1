import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRocket, FaUsers, FaShieldAlt } from "react-icons/fa";
import aboutHero from "../assets/about-hero.jpg";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

function About() {
  const features = [
    {
      icon: <FaRocket size={40} />,
      title: "Fast & Easy",
      desc: "Sell gadgets quickly with hassle-free pickups.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Trusted",
      desc: "Thousands trust us for secure transactions.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Secure",
      desc: "Your data and transactions are fully protected.",
    },
  ];

  const team = [
    { img: team1, name: "Alice Johnson", role: "Founder & CEO" },
    { img: team2, name: "Bob Smith", role: "Operations Head" },
    { img: team3, name: "Clara Lee", role: "Tech Lead" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutHero}) center/cover no-repeat`,
          color: "#fff",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <h1 className="display-4 fw-bold">About CashMart India</h1>
        <p className="lead mt-3 fs-5">
          Helping you sell old gadgets safely, quickly, and profitably.
        </p>
        <Button variant="light" size="lg" className="mt-3">
          Get Started
        </Button>
      </section>

      {/* Mission & Vision */}
      <section className="py-5" style={{ background: "#f0f4f8" }}>
        <Container>
          <Row className="g-4 justify-content-center">
            <Col md={5} className="glass-card p-4">
              <h3>Our Mission</h3>
              <p>
                Provide an easy, trustworthy, and efficient platform for selling
                old electronics. Simplifying gadget recycling for everyone.
              </p>
            </Col>
            <Col md={5} className="glass-card p-4">
              <h3>Our Vision</h3>
              <p>
                A world where old gadgets find a new home, reducing e-waste, and
                promoting sustainability.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <Row className="g-4 justify-content-center">
            {features.map((feature, i) => (
              <Col
                md={4}
                key={i}
                className="glass-card feature-card p-4 text-center"
              >
                <div className="mb-3">{feature.icon}</div>
                <h5>{feature.title}</h5>
                <p>{feature.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team */}
      <section className="py-5" style={{ background: "#f0f4f8" }}>
        <Container>
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <Row className="g-4 justify-content-center">
            {team.map((member, i) => (
              <Col md={4} key={i}>
                <div className="team-card text-center p-3 glass-card">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="team-img mb-3"
                  />
                  <h5>{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center gradient-cta text-white">
        <h2>Ready to sell your gadget?</h2>
        <p className="mb-4 fs-5">
          Book a free pickup and get instant cash today!
        </p>
        <Button variant="light" size="lg">
          Sell Now
        </Button>
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
        .feature-card div {
          color: #007bff;
        }
        .team-card .team-img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.3);
        }
        .gradient-cta {
          background: linear-gradient(90deg, #007bff 0%, #00d4ff 100%);
        }
      `}</style>
    </div>
  );
}

export default About;
