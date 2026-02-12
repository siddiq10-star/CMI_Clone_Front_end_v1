// src/Components/Categories.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Categories() {
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      console.log("Fetching categories from:", API_BASE_URL);
      try {
        const res = await axios.get(`${API_BASE_URL}/api/categories`);
        // console.log("✅ Categories fetched:", res.data);
        // Adjust based on your API structure
        setCategories(res.data || []);
      } catch (err) {
        if (err.response) {
          // Server responded with a status outside 2xx
          console.error("❌ Server responded with error:");
          console.error("Status:", err.response.status);
          console.error("Data:", err.response.data);
        } else if (err.request) {
          // Request was made but no response
          console.error("❌ No response received from server:", err.request);
        } else {
          // Something else happened
          console.error("❌ Axios error:", err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="py-5">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-4">
          <motion.h2
            className="fw-bold text-success"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Would You Like to Sell?
          </motion.h2>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Choose a category and start selling your product in minutes.
          </motion.p>
        </div>

        {/* Categories Grid */}
        {loading ? (
          <p className="text-center text-muted">Loading categories...</p>
        ) : categories.length === 0 ? (
          <p className="text-center text-muted">No categories found.</p>
        ) : (
          <Row className="g-4 justify-content-center">
            {categories.map((item, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={item._id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/sell/${item._id}`}
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
            ))}
          </Row>
        )}
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .category-card {
            background: #fff;
            transition: all 0.3s ease;
            border: 1px solid rgba(0,128,0,0.1);
          }
          .category-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.1);
            border-color: #198754;
          }
          .category-img {
            height: 70px;
            width: 100%;
            object-fit: contain;
          }
        `}
      </style>
    </section>
  );
}

export default Categories;
