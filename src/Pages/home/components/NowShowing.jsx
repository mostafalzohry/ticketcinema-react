import { Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function GridExample(props) {
  const nowHome = props.movies?.slice(0, 4);
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/footer_bg.jpg")`,
      }}
    >
      <h1
        className="fw-bold mb-3"
        style={{
          fontfamily: "droid arabic kufi,poppins,sans-serif",
          textAlign: "center",
          color: "white",
          paddingTop: "7rem",
        }}
      >
        Now Showing
      </h1>
      <span
        className="bg-info d-block mx-auto rounded-bottom"
        style={{ width: 100, height: 5 }}
      ></span>
      <span
        className="bg-info d-block mb-5 mx-auto rounded-bottom"
        style={{ width: 28, height: 4 }}
      ></span>
      <div style={{ width: "80%", margin: "auto" }}>
        <Row xs={1} md={4} className="g-4">
          {nowHome?.map((movie, idx) => (
            <Col key={idx}>
              <Card style={{ border: 0 }}>
                <div style={{ height: "428px" }}>
                  <Card.Img
                    variant="top"
                    src={movie.poster}
                    style={{ height: "100%" }}
                  />
                </div>
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
                    {movie.name}
                  </Card.Title>
                  <Button
                    className="btn-sm"
                    variant="outline-info"
                    style={{
                      margin: ".5rem 0 2rem 0",
                      color: "white",
                    }}
                    onClick={() => {
                      navigate(`/details/${movie.id}`, { replace: true });
                    }}
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default GridExample;
