import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#010102" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://www.rnscinemas.net/public/logo.png"
            height="50"
            className="d-inline-block align-top w-100"
            alt="React Bootstrap logo"
            href="/"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/" style={{ lineHeight: "38px" }}>
              HOME
            </Nav.Link>
            <Nav.Link href="/" style={{ lineHeight: "38px" }}>
              NOW SHOWING
            </Nav.Link>
            <Nav.Link href="/soon" style={{ lineHeight: "38px" }}>
              COMING SOON
            </Nav.Link>
            <Nav.Link href="/cinemas" style={{ lineHeight: "38px" }}>
              CINEMAS
            </Nav.Link>
            <Nav.Link href="/contact" style={{ lineHeight: "38px" }}>
              CONTACT
            </Nav.Link>
            <Nav.Link eventKey={2} href="/register">
              <Button variant="outline-info">SIGN IN</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
