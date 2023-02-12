import "../details/components/detailsBody.css";
import { Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const CinemaDetails = (props) => {
  const location = useLocation();
  const { title } = location.state;
  const { image } = location.state;

  return (
    <div
      style={{
        backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/movie_details_bg.jpg")`,
        padding: "1rem 0 5rem 0",
      }}
    >
      <Row style={{ width: "80%", margin: "auto" }}>
        <Col sm={4} style={{ padding: "150px 0" }}>
          <Card style={{ width: "20rem", margin: "auto" }}>
            <Card.Img variant="top" src={image} style={{}} />
          </Card>
        </Col>
        <Col sm={8} style={{ padding: "2rem 0rem" }}>
          <h2
            style={{
              fontSize: "3em",
              color: "white",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: 1,
              marginBottom: "30px",
              textAlign: "left",
            }}
          >
            {title}
          </h2>

          <p>
            - Address: {title} <br />
            - Screens: 10 <br />
            - 20LE For 3D Glasses <br />
            - Childrens under age 4 is not allowed <br />
          </p>

          <h2
            style={{
              fontSize: "2em",
              color: "white",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: 1,
              textAlign: "left",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Seats & Prices
          </h2>

          <p>
            <span
              style={{
                width: "30px",
                height: "30px",
                display: "inline-block",
                border: "5px solid #fff",
                marginRight: "10px",
              }}
            ></span>
            Regular : 100 EGP for all showtimes.
          </p>
          <p>
            <span
              style={{
                width: "30px",
                height: "30px",
                display: "inline-block",
                border: "5px solid #be49ff",
                marginRight: "10px",
              }}
            ></span>
            Premium : 120 EGP for all showtimes.
          </p>
          <p>
            <span
              style={{
                width: "30px",
                height: "30px",
                display: "inline-block",
                border: "5px solid #ff5400",
                marginRight: "10px",
              }}
            ></span>
            DBOX : 135 EGP for all showtimes.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default CinemaDetails;
