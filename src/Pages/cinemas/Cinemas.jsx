import "./cinemas.css";
import { Row } from "react-bootstrap";
import CinemaCard from "./CinemaCard";
import CinemaHeader from "./CinemaHeader";

export default function Cinemas() {
  return (
    <>
      <CinemaHeader />

      <div
        style={{
          backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/footer_bg.jpg")`,
        }}
      >
        <h1
          className="fw-bold mb-3"
          style={{
            fontfamily: "droid arabic kufi,poppins,sans-serif",
            textAlign: "left",
            paddingLeft: "10rem",
            color: "white",
            paddingTop: "7rem",
            paddingBottom: "2rem",
          }}
        >
          Cinemas
        </h1>

        <div style={{ width: "80%", margin: "auto" }}>
          <Row xs={1} md={3} className="g-4">
            <CinemaCard
              image="https://www.rnscinemas.net/public/qv/61f68de36e35000006002f55.jpg"
              title="Open Air Mall - Madinty - New Cairo"
            />

            <CinemaCard
              image="https://www.rnscinemas.net/public/qv/61f68df96e35000006002f56.jpg"
              title="San Stefano Mall, Alexandria"
            />

            <CinemaCard
              image="https://www.rnscinemas.net/public/qv/61f221c1e41600006e002b78.jpg"
              title="Kornish El Nile St. Boulak"
            />

            <CinemaCard
              image="https://www.rnscinemas.net/public/qv/61f68dda6e35000006002f54.jpg"
              title="Mall number 1 - El Rehab City - New Cairo"
            />
            <CinemaCard
              image="https://www.rnscinemas.net/public/qv/61f68dd26e35000006002f53.jpg"
              title="8 Emad El Din St., Down Town - Cairo"
            />
            <CinemaCard
              image="https://www.rnscinemas.net/public/qv/61f68dc16e35000006002f52.jpg"
              title="6th of October - Alex Desert Road"
            />
          </Row>
        </div>
      </div>
    </>
  );
}
