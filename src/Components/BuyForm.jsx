import axios from "axios";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Works from "./Works";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function BuyForm() {
  const location = useLocation();

  // ✅ Normalize product fields for old & new schema
  const rawProduct = location.state?.product || {};

  const product = {
    p_name: rawProduct.p_name || rawProduct.name || "Unknown Product",
    p_price: parseFloat(rawProduct.p_price || rawProduct.basePrice || 0),
    p_varient: rawProduct.p_varient || null,
    p_discount: rawProduct.p_discount || null,
    p_displayPrice: rawProduct.p_displayPrice || null,
    p_code: rawProduct.p_code || null,
    p_brand: rawProduct.p_brand || rawProduct.brand?.name || "Unknown",
    p_color: rawProduct.p_color || null,
    p_display: rawProduct.p_display || null,
    p_camera: rawProduct.p_camera || null,
    p_processor: rawProduct.p_processor || null,
    p_battery: rawProduct.p_battery || null,
    p_condition: rawProduct.p_condition || null,
    p_description: rawProduct.p_description || rawProduct.description || "",
    p_accessories: rawProduct.p_accessories || [],
    p_images: rawProduct.p_images || [rawProduct.image],
  };

  const items = [
    {
      p_name: product.p_name,
      p_price: product.p_price,
      quantity: 1,
    },
  ];

  const price = product.p_price || 0;
  const shipping = 50;
  const tax = price * 0.05;
  const grandTotal = price + shipping + tax;

  const formatCurrency = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(num);

  const validationSchema = Yup.object().shape({
    c_name: Yup.string().required("Full Name is required"),
    c_email: Yup.string().email("Invalid email").required("Email is required"),
    c_city: Yup.string().required("City is required"),
    c_pincode: Yup.number().required("Pincode is required"),
    c_number: Yup.string().required("Phone number is required"),
    c_address: Yup.string().required("Address is required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const finalData = {
      ...values,
      grand_total: grandTotal,
      product_details: product,
    };

    axios
      .post("http://localhost:8000/web/api/orderInsert", finalData)
      .then(() => {
        alert("Order submitted successfully!");
        resetForm();
      })
      .catch((err) => {
        console.error("❌ Error submitting order:", err);
        alert("Failed to submit order.");
      })
      .finally(() => setSubmitting(false));
  };

  console.log("🛒 Normalized Product:", product);

  return (
    <>
      <Container fluid className="d-flex pt-5 justify-content-center">
        <Row className="w-100">
          {/* Form */}
          <Col xs={12} md={8} lg={6} className="mx-auto pt-5">
            <Formik
              initialValues={{
                c_name: "",
                c_email: "",
                c_city: "",
                c_pincode: "",
                c_number: "",
                c_address: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="p-4 border rounded bg-light shadow">
                  <h3 className="text-center mb-4">Place Order</h3>

                  <div className="d-flex gap-3">
                    <div className="mb-3 w-100">
                      <label className="form-label">Full Name*</label>
                      <Field
                        type="text"
                        name="c_name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="c_name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3 w-100">
                      <label className="form-label">Enter Email*</label>
                      <Field
                        type="email"
                        name="c_email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="c_email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <div className="mb-3 w-100">
                      <label className="form-label">Select City*</label>
                      <Field name="c_city" as="select" className="form-select">
                        <option value="">---Select City---</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Mysore">Mysore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Mumbai">Mumbai</option>
                      </Field>
                      <ErrorMessage
                        name="c_city"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3 w-100">
                      <label className="form-label">Pincode*</label>
                      <Field
                        type="number"
                        name="c_pincode"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="c_pincode"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <div className="mb-3 w-100">
                      <label className="form-label">Phone Number*</label>
                      <Field
                        type="text"
                        name="c_number"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="c_number"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3 w-100">
                      <label className="form-label">Full Address*</label>
                      <Field
                        as="textarea"
                        name="c_address"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="c_address"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>

          {/* Order Summary */}
          <Col>
            <Container className="pt-5">
              <Card className="shadow rounded no-hover">
                <Card.Header className="bg-primary text-white">
                  <h4 className="mb-0">Order Summary</h4>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    {items.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col xs={8}>
                            <strong>{item.p_name}</strong>
                            <div className="text-muted">
                              Qty: {item.quantity}
                            </div>
                          </Col>
                          <Col xs={4} className="text-end">
                            {formatCurrency(item.p_price)}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                    <ListGroup.Item>
                      <Row>
                        <Col>Subtotal</Col>
                        <Col className="text-end">{formatCurrency(price)}</Col>
                      </Row>
                      <Row>
                        <Col>Shipping</Col>
                        <Col className="text-end">
                          {formatCurrency(shipping)}
                        </Col>
                      </Row>
                      <Row>
                        <Col>Tax (5%)</Col>
                        <Col className="text-end">{formatCurrency(tax)}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-bold">
                      <Row>
                        <Col>Total</Col>
                        <Col className="text-end">
                          {formatCurrency(grandTotal)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>

      <br />

      <Container fluid>
        <Works />
      </Container>

      <Container fluid>
        <Footer />
      </Container>
    </>
  );
}

export default BuyForm;
