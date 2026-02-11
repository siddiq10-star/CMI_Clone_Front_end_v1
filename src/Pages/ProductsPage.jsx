import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import Features from "../Components/Features";
import DynamicBrands from "../Components/DynamicBrands";
import DownloadApp from "../Components/DownloadApp";
import Footer from "../Components/Footer";
import TrendingBrands from "../Components/TrendingBrands";

function ProductsPage() {
  const { brandId } = useParams();
  const API_BASE_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5000";

  const [products, setProducts] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/products/brand/${brandId}`,
        );

        if (Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        } else {
          setProducts([]);
        }

        setBrandName(res.data.brand || "Brand");
      } catch (err) {
        console.error("❌ Failed to fetch products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    if (brandId) fetchProducts();
  }, [brandId, API_BASE_URL]);

  return (
    <>
      {/* Products Listing Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <motion.h2
              className="fw-bold text-success"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {brandName} Products
            </motion.h2>
            <motion.p
              className="text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Browse all {brandName} products available for sale.
            </motion.p>
          </div>

          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="success" />
            </div>
          ) : error ? (
            <p className="text-danger text-center">{error}</p>
          ) : products.length === 0 ? (
            <p className="text-center text-muted">No products found.</p>
          ) : (
            <Row className="g-4 justify-content-center">
              {products.map((product, index) => (
                <Col key={product._id} xs={6} sm={4} md={3} lg={2}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={`/productDetails/${product._id}`}
                      className="text-decoration-none"
                    >
                      <div className="brand-card text-center p-3 shadow-sm rounded-4 h-100">
                        <img
                          src={product.image || "/placeholder.png"}
                          alt={product.name}
                          className="brand-img mb-2"
                          style={{ height: "100px", objectFit: "contain" }}
                        />
                        <h6 className="fw-bold text-dark">{product.name}</h6>
                      </div>
                    </Link>
                  </motion.div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* Full Width Sections */}
      <section className="section-padding">
        <Features />
      </section>

      <section className="section-padding">
        <TrendingBrands />
      </section>

      <section className="section-padding">
        <DownloadApp />
      </section>

      <section className="section-padding">
        <Footer />
      </section>
    </>
  );
}

export default ProductsPage;
