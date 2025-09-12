import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

function ReactCarousel() {
  return (
    <section>
      <Container className="my-5">
        <Row>
          <Col>
            <Carousel interval={1000} className="rounded">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 rounded object-fit-cover"
                  src={pic1}
                  alt="First slide"
                />
                <Carousel.Caption
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white">First Slide</h3>
                  <p className="text-white">Description for first slide.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 rounded object-fit-cover"
                  src={pic2}
                  alt="Second slide"
                />
                <Carousel.Caption
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white">First Slide</h3>
                  <p className="text-white">Description for first slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 rounded object-fit-cover"
                  src={pic3}
                  alt="Third slide"
                />
                <Carousel.Caption
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-white">First Slide</h3>
                  <p className="text-white">Description for first slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ReactCarousel;
