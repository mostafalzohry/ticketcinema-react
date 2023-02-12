import "./styleSheets/coming.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Coming = (props) => {
  const soonHome = props.movies?.slice(20, 24);
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/tr_movies_bg.jpg")`,
        padding: "4rem 0",
      }}
    >
      <div style={{ width: "80%", margin: "auto" }} className="text-center">
        {" "}
        <p
          style={{
            color: "#00e1ff",
            letterSpacing: "1px",
            fontSize: "12px",
            fontWeight: "500",
            textAlign: "left",
            paddingTop: "50px",
            marginBottom: "5px",
          }}
        >
          FIND THE LATEST NEW MOVIES COMING SOON TO RENAISSANCE CINEMAS
        </p>
        <h2
          style={{
            color: "#fff",
            letterSpacing: "1px",
            fontSize: "36px",
            fontWeight: "700",
            textAlign: "left",
          }}
        >
          Coming Soon
        </h2>
        <div className="text-end" style={{ paddingBottom: "3rem" }}>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
            style={{}}
          >
            <button type="button" className="btn btn-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-caret-left-fill"
                viewBox="0 0 20 20"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </button>
            <button type="button" className="btn btn-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 20 20"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
          </div>
        </div>
        <Row xs={1} md={4} className="g-4">
          {soonHome?.map((movie, idx) => (
            <Col key={idx} onClick={() => navigate(`/details/${movie.id}`)}>
              <Card style={{ border: 0 }}>
                <div style={{ height: "450px" }}>
                  <Card.Img
                    style={{ cursor: "pointer", height: "100%" }}
                    variant="top"
                    src={movie.poster}
                  />
                </div>
                <Card.Body
                  className="text-start"
                  style={{
                    backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/tr_movies_bg.jpg")`,
                    padding: "24px 0",
                  }}
                >
                  <Card.Title
                    id="carTitle"
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    {movie.name}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#bcbcbc",
                    }}
                  >
                    {movie.released}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Button
          onClick={() => navigate("/soon")}
          variant="outline-info"
          style={{
            margin: "2rem 0 2rem 0",
            color: "white",
          }}
        >
          BROWSE ALL MOVIES
        </Button>
      </div>
    </div>
  );
};

export default Coming;
