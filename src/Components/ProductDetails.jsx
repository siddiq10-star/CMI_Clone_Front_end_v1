import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        // Adjust depending on backend response structure
        setProduct(res.data.product || res.data);
      })
      .catch((err) => console.error("❌ Fetch error:", err));
  }, [id]);

  if (!product) {
    return (
      <Container className="text-center pt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading product...</p>
      </Container>
    );
  }

  return (
    <div className="pt-5">
      <Container className="pt-5">
        <Row>
          {/* Product Image */}
          <Col md={6}>
            <div
              className="d-flex align-items-center justify-content-center bg-white rounded shadow"
              style={{ height: "400px", overflow: "hidden" }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Col>

          {/* Product Details */}
          <Col md={6}>
            <h2 className="fw-bold">{product.name}</h2>

            <div className="d-flex gap-3 align-items-center my-2">
              <h3 className="text-success">₹{product.basePrice}</h3>
            </div>

            <div className="pt-3">
              <p>
                <strong>Brand:</strong> {product.brand?.name || "Unknown"}
              </p>
              {/* Add extra fields if your schema has them */}
              <p>
                <strong>Description:</strong>{" "}
                {product.description || "No description available."}
              </p>
            </div>

            <Button
              variant="outline-success"
              className="me-2"
              onClick={() =>
                navigate("/buy-form", {
                  state: { product }, // send full product
                })
              }
            >
              Buy Now
            </Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Customer Reviews Section */}
      <Container className="mt-4">
        <h4 className="fw-semibold">Customer Reviews</h4>
        <div className="d-flex align-items-center mb-2">
          {[...Array(5)].map((_, i) => {
            const rating = product.rating || 4.5;
            return rating >= i + 1 ? (
              <FaStar key={i} className="text-warning" />
            ) : rating >= i + 0.5 ? (
              <FaStarHalfAlt key={i} className="text-warning" />
            ) : (
              <FaRegStar key={i} className="text-warning" />
            );
          })}
          <span className="ms-2 text-muted">
            {product.rating || 4.5} out of 5
          </span>
        </div>

        <div className="border rounded p-3 bg-light mb-2">
          <strong>Ravi Kumar</strong>
          <p className="mb-1">
            Amazing phone for the price. Battery life is solid!
          </p>
          <small className="text-muted">Posted 2 days ago</small>
        </div>

        <div className="border rounded p-3 bg-light mb-2">
          <strong>Sneha J.</strong>
          <p className="mb-1">Camera is decent. Screen is bright and clear.</p>
          <small className="text-muted">Posted 5 days ago</small>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetails;
