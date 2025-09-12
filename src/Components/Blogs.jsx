// src/Components/Blogs.jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "How to Get the Best Value for Your Old Phone",
    excerpt:
      "Discover smart tips and tricks to maximize your phone’s resale value before selling it.",
    image: "https://source.unsplash.com/400x250/?smartphone,technology",
    link: "#",
  },
  {
    id: 2,
    title: "Top 5 Laptops That Hold Their Resale Value",
    excerpt:
      "Some laptops are built to last longer and retain value. Find out which models are worth investing in.",
    image: "https://source.unsplash.com/400x250/?laptop,work",
    link: "#",
  },
  {
    id: 3,
    title: "Eco-Friendly Gadget Recycling making best",
    excerpt:
      "Learn how selling your gadgets helps reduce e-waste and supports a sustainable future.",
    image: "https://source.unsplash.com/400x250/?recycle,environment",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-5">
          <motion.h2
            className="fw-bold text-success"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Latest Blogs & Insights
          </motion.h2>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Stay updated with trends, tips, and insights to get the most out of
            your gadgets.
          </motion.p>
        </div>

        {/* Blog Cards */}
        <Row className="g-4">
          {blogPosts.map((post, index) => (
            <Col md={4} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={post.image}
                    alt={post.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{post.title}</Card.Title>
                    <Card.Text className="text-muted">{post.excerpt}</Card.Text>
                    <Button
                      variant="success"
                      href={post.link}
                      className="rounded-pill px-3"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
