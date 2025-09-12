import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import logo from "../assets/logo.png";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Inline style for search input glow
  const searchStyle = {
    paddingRight: "2.5rem",
    borderRadius: "25px",
    height: "38px",
    border: "1px solid #ced4da",
    transition: "all 0.3s ease",
  };

  const handleFocus = (e) =>
    (e.target.style.boxShadow = "0 0 12px rgba(25, 135, 84, 0.4)");
  const handleBlur = (e) => (e.target.style.boxShadow = "none");
  const handleMouseEnter = (e) =>
    (e.target.style.boxShadow = "0 0 12px rgba(25, 135, 84, 0.2)");
  const handleMouseLeave = (e) => (e.target.style.boxShadow = "none");

  return (
    <Navbar
      expand="lg"
      bg="white"
      variant="light"
      fixed="top"
      className="shadow-sm py-2"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img src={logo} alt="logo" height="40" className="me-2" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          {/* Nav Links */}
          <Nav className="mx-auto">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Sell", path: "/sell" },
              { name: "Buy", path: "/buy" },
              { name: "Contact", path: "/contact" },
            ].map((link) =>
              link.name === "Sell" ? (
                <NavDropdown
                  key={link.name}
                  title="Sell"
                  id="sell-dropdown"
                  className="fw-semibold"
                >
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <NavDropdown.Item
                        as={NavLink}
                        to={`/sell/${cat._id}`}
                        key={cat._id}
                      >
                        {cat.name}
                      </NavDropdown.Item>
                    ))
                  ) : (
                    <NavDropdown.Item disabled>No Categories</NavDropdown.Item>
                  )}
                </NavDropdown>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link fw-semibold position-relative ${
                      isActive ? "active-link" : ""
                    }`
                  }
                  style={{ margin: "0 0.5rem", position: "relative" }}
                >
                  {link.name}
                </NavLink>
              )
            )}
          </Nav>

          {/* Search Form */}
          <Form
            className="d-flex position-relative"
            role="search"
            style={{ width: "220px" }}
          >
            <FormControl
              type="search"
              placeholder="Search..."
              style={searchStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <Button
              type="submit"
              variant="outline-success"
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                border: "none",
                padding: "0.35rem 0.5rem",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BiSearch size={18} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
