import { Container, Row, Col } from "react-bootstrap";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import "./styleSheets/locations.css";

const Locations = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/services_bg02.jpg")`,
        }}
      >
        <div style={{ width: "80%", margin: "auto" }}>
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
            WE ARE ALWAYS AROUND YOU!
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
            Our Locations
          </h2>
          <Container>
            <Row
              style={{
                padding: "40px 0 20px 0",
              }}
            >
              <Col sm className="pointer">
                <Col sm={4} style={{ display: "inline-block" }}>
                  <div
                    className="d-flex justify-content-center align-items-center circle"
                    style={{ color: "#2b96cc" }}
                  >
                    <VideoCameraBackIcon sx={{ fontSize: 50 }} />
                  </div>
                </Col>
                <Col sm={8} style={{ display: "inline-block" }}>
                  <h5 className="title">Madinty</h5>
                  <p>Open Air Mall - Madinty - New Cairo</p>
                </Col>
              </Col>
              <Col sm className="pointer">
                <Col sm={4} style={{ display: "inline-block" }}>
                  <div
                    className="d-flex justify-content-center align-items-center circle"
                    style={{ color: "#2b96cc" }}
                  >
                    <VideoCameraBackIcon sx={{ fontSize: 50 }} />
                  </div>
                </Col>
                <Col sm={8} style={{ display: "inline-block" }}>
                  <h5 className="title"> San Stephano </h5>
                  <p> San Stefano Mall, Alexandria </p>
                </Col>
              </Col>
              <Col sm className="pointer">
                <Col sm={4} style={{ display: "inline-block" }}>
                  <div
                    className="d-flex justify-content-center circle"
                    style={{ color: "#2b96cc" }}
                  >
                    <VideoCameraBackIcon sx={{ fontSize: 50 }} />
                  </div>
                </Col>
                <Col sm={8} style={{ display: "inline-block" }}>
                  <h5 className="title"> Nile City </h5>
                  <p> Kornish El Nile St. Boulak </p>
                </Col>
              </Col>
              <Col sm className="pointer">
                <Col sm={4} style={{ display: "inline-block" }}>
                  <div
                    className="d-flex justify-content-center circle"
                    style={{ color: "#2b96cc" }}
                  >
                    <VideoCameraBackIcon sx={{ fontSize: 50 }} />
                  </div>
                </Col>
                <Col sm={8} style={{ display: "inline-block" }}>
                  <h5 className="title"> Al Rehab </h5>
                  <p> Mall number 1 - El Rehab City - New Cairo </p>
                </Col>
              </Col>
            </Row>
            <Row style={{ padding: "20px 0 70px 0" }}>
              <Col sm={3} className="pointer">
                <Col sm={4} style={{ display: "inline-block" }}>
                  <div
                    className="d-flex justify-content-center circle"
                    style={{ color: "#2b96cc" }}
                  >
                    <VideoCameraBackIcon sx={{ fontSize: 50 }} />
                  </div>
                </Col>
                <Col sm={8} style={{ display: "inline-block" }}>
                  <h5 className="title"> DownTown </h5>
                  <p> 8 Emad El Din St., Down Town - Cairo </p>
                </Col>
              </Col>
              <Col sm={3} className="pointer">
                <Col sm={4} style={{ display: "inline-block" }}>
                  <div
                    className="d-flex justify-content-center circle"
                    style={{ color: "#2b96cc" }}
                  >
                    <VideoCameraBackIcon sx={{ fontSize: 50 }} />
                  </div>
                </Col>
                <Col sm={8} style={{ display: "inline-block" }}>
                  <h5 className="title"> Dandy Mall </h5>
                  <p> 6th of October - Alex Desert Road </p>
                </Col>
              </Col>
              <Col sm={3} className="pointer">
                <Col sm={4} style={{ display: "inline-block" }}>
                  <div
                    className="d-flex justify-content-center circle"
                    style={{ color: "#2b96cc" }}
                  >
                    <VideoCameraBackIcon sx={{ fontSize: 50 }} />
                  </div>
                </Col>
                <Col sm={8} style={{ display: "inline-block" }}>
                  <h5 className="title"> Semoha </h5>
                  <p> Commercial market, Semouha, Alexandria </p>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Locations;
