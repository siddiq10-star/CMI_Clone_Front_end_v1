import React, { useEffect, useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

import personImg from "../assets/dem.png";
import Footer from "../Components/Footer";
import Reviews from "../Components/Reviews";
import FAQs from "../Components/Faqs";
import Features from "../Components/Features";
import Cta from "../Components/Cta";
import Works from "../Components/Works";
import DynamicBrands from "../Components/DynamicBrands";

function Sell() {
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const { categoryId } = useParams();
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch categories & brands dynamically
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/categories`);
        setCategories(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch categories:", err);
      }
    };

    const fetchBrands = async () => {
      setLoading(true);
      try {
        const url = categoryId
          ? `${API_BASE_URL}/api/brands/${categoryId}`
          : `${API_BASE_URL}/api/brands`;

        const res = await axios.get(url);
        console.log("📦 API response:", res.data);

        if (Array.isArray(res.data)) {
          setBrands(res.data);
        } else if (Array.isArray(res.data.brands)) {
          setBrands(res.data.brands);
        } else {
          setBrands([]);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load brands.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchBrands();
  }, [categoryId]);

  // ✅ Filter brands by search term
  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // ✅ Show category name if present
  const categoryName =
    categoryId && brands.length > 0 ? brands[0]?.category?.name : "";

  return (
    <>
      <section className="py-5 bg-light">
        <Container>
          <div className="p-5 bg-white shadow rounded-4 d-flex flex-column flex-lg-row align-items-center justify-content-between">
            {/* Left Side */}
            <div className="mb-4 mb-lg-0" style={{ flex: 1 }}>
              <h1 className="fw-bold mb-3">
                {categoryName
                  ? `Sell Your ${categoryName}`
                  : "Sell Old Gadgets for Instant Cash"}
              </h1>

              <ul className="list-unstyled d-flex gap-3 mb-4">
                <li className="text-success">✔ Maximum Value</li>
                <li className="text-success">✔ Safe & Hassle-free</li>
                <li className="text-success">✔ Free Doorstep Pickup</li>
              </ul>

              {/* Search Bar */}
              <Form className="d-flex mb-4">
                <Form.Control
                  type="text"
                  placeholder={`Search your ${
                    categoryName || "gadget"
                  } brand to sell`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="success" className="ms-2">
                  Search
                </Button>
              </Form>

              {/* Brands Section */}
              {loading ? (
                <p>Loading brands...</p>
              ) : error ? (
                <p className="text-danger">{error}</p>
              ) : filteredBrands.length === 0 ? (
                <p>No brands available for this category.</p>
              ) : (
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  {filteredBrands.slice(0, 4).map(
                    (
                      item,
                      index, // ✅ Limit to 4
                    ) => (
                      <Col xs={6} sm={4} md={3} lg={2} key={item._id}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            to={`/brand/${item._id}`}
                            className="text-decoration-none"
                          >
                            <div className="category-card text-center p-3 shadow-sm rounded-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="category-img mb-2"
                              />
                              <h6 className="fw-bold text-dark">{item.name}</h6>
                            </div>
                          </Link>
                        </motion.div>
                      </Col>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* Right Side Image */}
            <div style={{ flex: 1 }} className="text-center">
              <img
                src={personImg}
                alt="Sell Gadgets"
                className="img-fluid"
                style={{
                  maxHeight: "300px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Other Sections */}
      <section>
        <DynamicBrands />
      </section>
      <section className="section-padding bg-light">
        <Works />
      </section>
      <section className="section-padding">
        <Reviews />
      </section>
      <section className="section-padding bg-light">
        <FAQs />
      </section>
      <section className="section-padding">
        <Features />
      </section>
      <section className="section-padding bg-light">
        <Cta />
      </section>
      <section className="section-padding bg-light">
        <Footer />
      </section>

      {/* Hover Styles */}
      <style>
        {`
          .brand-link img:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </>
  );
}

export default Sell;
