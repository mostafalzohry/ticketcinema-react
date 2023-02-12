import "./cinemas.css";
import { Link } from "react-router-dom";
import { Button, Col, Card } from "react-bootstrap";
import { useState } from "react";

export default function CinemaCard(props) {
  const image = props.image;
  const title = props.title;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Col style={{ border: "none" }}>
        <Card
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
          style={{ border: "none" }}
        >
          <Card.Img
            variant="top"
            src={`${image}`}
            className="position-relative"
          />

          {isHovering && (
            <Card.ImgOverlay>
              <Link to="/cinemadetails" state={{ title, image }}>
                <Button
                  variant="info"
                  className="position-absolute top-50 start-50 translate-middle btn-sm"
                >
                  Details
                </Button>
              </Link>
            </Card.ImgOverlay>
          )}

          <Card.Body
            className="text-center"
            style={{
              backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/footer_bg.jpg")`,
            }}
          >
            <Card.Title
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#fff",
                cursor: "pointer",
                marginTop: ".5rem",
              }}
            >
              {title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
