import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useMediaQuery } from "react-responsive";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Entrepreneur",
      feedback:
        "Selling my phone on CashMartIndia was super easy. Got the best price and instant payment. Highly recommended!",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5,
    },
    {
      name: "Priya Verma",
      role: "Freelancer",
      feedback:
        "Very smooth process, from price check to doorstep pickup. Customer support was quick to help!",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 4,
    },
    {
      name: "Amit Patel",
      role: "Student",
      feedback:
        "Loved the instant cash feature! The team was professional and friendly during pickup.",
      avatar: "https://i.pravatar.cc/100?img=3",
      rating: 5,
    },
    {
      name: "Sneha Rao",
      role: "Designer",
      feedback:
        "The whole process was transparent and easy. Payment was super quick!",
      avatar: "https://i.pravatar.cc/100?img=4",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "Engineer",
      feedback:
        "I was surprised by the price I got. Pickup was hassle-free. Very satisfied!",
      avatar: "https://i.pravatar.cc/100?img=5",
      rating: 4,
    },
    {
      name: "Neha Gupta",
      role: "Teacher",
      feedback:
        "Excellent service! The staff was polite and professional throughout.",
      avatar: "https://i.pravatar.cc/100?img=6",
      rating: 5,
    },
  ];

  // Media queries to detect screen size
  const isLarge = useMediaQuery({ minWidth: 992 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isSmall = useMediaQuery({ maxWidth: 767 });

  // Determine how many items per slide
  let itemsPerSlide = 3;
  if (isMedium) itemsPerSlide = 2;
  if (isSmall) itemsPerSlide = 1;

  // Group reviews into chunks based on itemsPerSlide
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
  const reviewChunks = chunkArray(reviews, itemsPerSlide);

  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center fw-bold text-success">
              What Our Clients Say
            </h2>
            <p className="text-center text-muted">
              Hear from our happy customers who sold their devices with us
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel indicators={false} interval={3000} pause={false}>
              {reviewChunks.map((chunk, idx) => (
                <Carousel.Item key={idx}>
                  <Row className="g-4 justify-content-center">
                    {chunk.map((review, index) => (
                      <Col
                        key={index}
                        xs={12}
                        md={Math.floor(12 / itemsPerSlide)}
                      >
                        <Card className="shadow-sm border-0 p-3 text-center review-card h-100">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="rounded-circle mx-auto mb-3"
                            style={{
                              width: "70px",
                              height: "70px",
                              objectFit: "cover",
                            }}
                          />
                          <Card.Body>
                            <Card.Text className="text-muted fst-italic small">
                              “{review.feedback}”
                            </Card.Text>
                            <h6 className="mt-3 fw-bold">{review.name}</h6>
                            <small className="text-secondary">
                              {review.role}
                            </small>
                            <div className="mt-2">
                              {Array.from({ length: review.rating }).map(
                                (_, i) => (
                                  <i
                                    key={i}
                                    className="bi bi-star-fill text-warning"
                                  ></i>
                                )
                              )}
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          .review-card {
            border-radius: 15px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .review-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </section>
  );
}

export default Testimonials;
