import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

function TrendingBrands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const maxVisible = 7;

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/brands");
        setBrands(res.data); // ✅ Removed mobile filter, include all brands
      } catch (err) {
        console.error("❌ Failed to fetch brands:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  const visibleCount = Math.min(maxVisible, brands.length);

  const handleNext = () => {
    if (startIndex + visibleCount < brands.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-4">
          <motion.h2
            className="fw-bold text-success"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trending Brands
          </motion.h2>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore the most popular brands people are selling today.
          </motion.p>
        </div>

        {loading ? (
          <p className="text-center text-muted">Loading brands...</p>
        ) : brands.length === 0 ? (
          <p className="text-center text-muted">
            No brands available right now.
          </p>
        ) : (
          <div className="d-flex align-items-center justify-content-center gap-2">
            <button
              className="custom-button"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <BsArrowLeftCircle />
            </button>
            <div className="overflow-hidden" style={{ width: "100%" }}>
              <div
                className="d-flex transition-transform"
                style={{
                  transform: `translateX(-${
                    startIndex * (100 / visibleCount)
                  }%)`,
                  transition: "transform 0.3s ease-in-out",
                  width: `${(brands.length / visibleCount) * 100}%`,
                }}
              >
                {brands.map((item, index) => (
                  <div
                    key={item._id}
                    style={{ flex: `0 0 ${100 / visibleCount}%` }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
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
                  </div>
                ))}
              </div>
            </div>
            <button
              className="custom-button"
              onClick={handleNext}
              disabled={startIndex + visibleCount >= brands.length}
            >
              <BsArrowRightCircle />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

export default TrendingBrands;
