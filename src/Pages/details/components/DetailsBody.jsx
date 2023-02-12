import "./detailsBody.css";
import ShowTimes from "./ShowTimes";
import { Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DetailsBody = () => {
  const [movie, setMovie] = useState({});
  let params = useParams([]);

  useEffect(() => {
    axios
      .get(
        `https://633c3a8474afaef16404d225.mockapi.io/cinema/Movies/${params.id}`
      )
      .then((res) => setMovie(res.data));
  }, [params.id]);

  function youtube() {
    window.location.replace(`${movie.youtube}`);
    return null;
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/movie_details_bg.jpg")`,
        padding: "5rem 0 3rem 0",
      }}
    >
      <Row style={{ width: "80%", margin: "auto" }}>
        <Col sm={4}>
          <Card
            style={{
              width: "100%",
              height: "95%",
              margin: "auto",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <Card.Img
              variant="top"
              src={movie.poster}
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            />
            <Link to="" onClick={() => youtube()}>
              <img
                alt=""
                src="https://www.rnscinemas.net/public/assets/img/images/play_icon.png"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "100px",
                  height: "100px",
                }}
              />
            </Link>
          </Card>
        </Col>
        <Col sm={8} style={{ padding: "5rem 2rem" }}>
          <h2
            style={{
              fontSize: "4em",
              color: "white",
              fontWeight: 700,
              fontStyle: "normal",
              fontFamily: "droid arabic kufi,poppins,sans-serif",
              lineHeight: 1,
              textAlign: "left",
            }}
          >
            {movie.name}
          </h2>
          <p style={{ fontWeight: "bold" }}>Genre: ( {movie.genre} )</p>
          <ul style={{ paddingLeft: "0" }}>
            <li id="g" style={{ color: "#e3dfdf" }}>
              {movie.rated}
            </li>
            <li id="date" style={{ color: "#e3dfdf" }}>
              <svg
                className="svg-inline--fa fa-calendar-days"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="calendar-days"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z"
                ></path>
              </svg>{" "}
              {movie.released}
            </li>
            <li style={{ color: "#e3dfdf" }}>
              <svg
                className="svg-inline--fa fa-clock"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="clock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"
                ></path>
              </svg>{" "}
              {movie.runtime}
            </li>
          </ul>
          <p>{movie.plot}</p>
        </Col>
      </Row>
      {movie.id <= 4 ? (
        <ShowTimes
          moviename={movie.name}
          movieposter={movie.poster}
          id={movie.id}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailsBody;
