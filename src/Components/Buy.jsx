import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button, Col, Row } from "react-bootstrap";

function Buy() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((res) => {
        console.log("API Response:", res.data);
        const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
        setProducts(data);
      })
      .catch((err) => {
        console.error("❌ API Error:", err);
        setProducts([]);
      });
  }, []);

  return (
    <>
      <div className="pt-5">
        <h2 className="text-center m-2">
          India's Largest Refurbished Mobile Phone Store
        </h2>
      </div>

      <Container>
        <h1 className="text-center">Top Brands</h1>
        <br />

        <Row className="flex-column align-items-center">
          {products.length > 0 ? (
            products.map((product) => (
              <Col key={product._id} xs={12}>
                <div
                  className="d-flex gap-3 p-3 mb-4"
                  style={{
                    background: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    alignItems: "center",
                    maxWidth: "1000px",
                    margin: "auto",
                    minHeight: "220px",
                  }}
                >
                  <img
                    src={
                      product.image ||
                      "https://placehold.co/200x200?text=No+Image"
                    }
                    alt={product.name}
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      flexShrink: 0,
                    }}
                    onError={(e) =>
                      (e.target.src =
                        "https://placehold.co/200x200?text=Image+Not+Found")
                    }
                  />

                  <div style={{ flex: 1 }}>
                    <h5 style={{ fontWeight: "bold", marginBottom: "4px" }}>
                      {product.name}
                    </h5>
                    <p style={{ margin: 0 }}>
                      Brand: <strong>{product.brand?.name || "Unknown"}</strong>
                    </p>

                    <div className="d-flex align-items-center gap-2 mt-2">
                      <span
                        style={{
                          color: "green",
                          fontWeight: 600,
                          fontSize: "1.1rem",
                        }}
                      >
                        ₹{product.basePrice}
                      </span>
                    </div>

                    <Button
                      onClick={() =>
                        navigate(`/productDetails/${product._id}`, {
                          state: {
                            product_id: product._id,
                            product_name: product.name,
                            product_price: product.basePrice,
                          },
                        })
                      }
                      variant="outline-success"
                      size="sm"
                      className="mt-2"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <p className="text-center">Loading or No Products Found</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Buy;
