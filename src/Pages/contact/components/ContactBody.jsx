import "./contactBody.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
const ContactBody = () => {
  return (
    <div id="contbody">
      <Container style={{ width: "80%", margin: "auto" }}>
        <Row>
          <Col sm={8}>
            <h5 className="contTitle">Send a message</h5>
            <Form style={{ margin: "80px 0 0 0" }}>
              <Form.Group className="mb-4" controlId="formBasicName">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name *"
                  className="mb-3"
                  style={{ color: "#bcbcbc" }}
                >
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    style={{
                      backgroundColor: "#1f1e24",
                      border: "1px solid #1f1e24",
                      boxShadow: "0 1px 7px 0 rgb(0 0 0 / 46%)",
                      color: "#bcbcbc",
                    }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Email *"
                  className="mb-3"
                  style={{ color: "#bcbcbc" }}
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{
                      backgroundColor: "#1f1e24",
                      border: "1px solid #1f1e24",
                      boxShadow: "0 1px 7px 0 rgb(0 0 0 / 46%)",
                      color: "#bcbcbc",
                    }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicName">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Subject *"
                  className="mb-3"
                  style={{ color: "#bcbcbc" }}
                >
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    style={{
                      backgroundColor: "#1f1e24",
                      border: "1px solid #1f1e24",
                      boxShadow: "0 1px 7px 0 rgb(0 0 0 / 46%)",
                      color: "#bcbcbc",
                    }}
                  />
                </FloatingLabel>
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Type Your Message..."
                style={{ color: "#bcbcbc" }}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{
                    height: "100px",
                    backgroundColor: "#1f1e24",
                    border: "1px solid #1f1e24",
                    boxShadow: "0 1px 7px 0 rgb(0 0 0 / 46%)",
                    color: "#bcbcbc",
                  }}
                />
              </FloatingLabel>

              <Button
                variant="info"
                type="submit"
                className="mt-5"
                style={{
                  padding: "10px 40px",
                  marginBottom: "50px",
                }}
              >
                SEND MESSAGE
              </Button>
            </Form>
          </Col>

          <Col sm={4}>
            <h5 className="contTitle">Head Office</h5>
            <div id="headBox">
              <ul>
                <li>
                  <div className="icon">
                    <svg
                      style={{ color: "#1f1e24" }}
                      class="svg-inline--fa fa-location-dot"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="location-dot"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                      ></path>
                    </svg>
                  </div>
                  <p className="boxP">
                    <span className="boxTitle">Address :</span> 21 Ahmed Orabi,
                    El Mohandssen, Giza Egypt
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <svg
                      style={{ color: "#1f1e24" }}
                      class="svg-inline--fa fa-envelope"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="envelope"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                      ></path>
                    </svg>
                  </div>
                  <p className="boxP">
                    <span className="boxTitle">Email :</span>{" "}
                    website@arabiacpd.com
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactBody;
