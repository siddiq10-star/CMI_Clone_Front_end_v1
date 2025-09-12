import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"; // ✅ get categoryId from URL
import { motion } from "framer-motion";

function DynamicBrands() {
  const { categoryId } = useParams(); // ✅ get categoryId from route
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        let url = "http://localhost:5000/api/brands";
        if (categoryId) {
          url = `http://localhost:5000/api/brands/${categoryId}`;
        }

        const res = await axios.get(url);
        console.log("📦 API response:", res.data);

        if (Array.isArray(res.data)) {
          setBrands(res.data);
        } else if (Array.isArray(res.data.brands)) {
          setBrands(res.data.brands);
          setCategoryName(res.data.name); // ✅ from API { name, brands }
        } else {
          setBrands([]);
        }
      } catch (err) {
        console.error("❌ Failed to fetch brands:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, [categoryId]);

  return (
    <section className="py-5 bg-light">
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
            {categoryName
              ? `Trending ${categoryName} Brands`
              : "Trending Brands"}
          </motion.h2>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore the most popular {categoryName || "gadget"} brands people
            are selling today.
          </motion.p>
        </div>

        {/* Brands Grid */}
        {loading ? (
          <p className="text-center text-muted">Loading brands...</p>
        ) : brands.length === 0 ? (
          <p className="text-center text-muted">
            No {categoryName || "gadget"} brands available right now.
          </p>
        ) : (
          <Row className="g-4 justify-content-center">
            {brands.map((item, index) => (
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
                    <div className="brand-card text-center p-3 shadow-sm rounded-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="brand-img mb-2"
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
    </section>
  );
}

export default DynamicBrands;
