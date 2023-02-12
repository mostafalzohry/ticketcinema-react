import "./showTimes.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

const CardTimers = (props) => {
  let title = props.Title;
  let date = props.date;
  let moviename = props.moviename;
  let movieimage = props.movieimage;
  let movieid = props.id;

  let today = moment().format("dddd MMMM Do");

  const hours = ["6:00 PM", "9:00 PM", "12:00 PM"];

  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#636262",
        marginTop: "2rem",
      }}
      className="showCard"
    >
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "22px",
            fontFamily: "droid arabic kufi, poppins, sans-serif",
            color: "#fff",
            fontWeight: 700,
            marginBottom: "0.5rem",
            lineHeight: 1.2,
          }}
        >
          {title} - {date || today}
        </Card.Title>
        <Card.Text
          style={{
            marginLeft: "9px",
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Regular - Premium
        </Card.Text>
        <Link
          to={`/booking/${movieid}`}
          state={{ title, date, hour: hours[0], moviename, movieimage }}
        >
          <Button
            variant="outline-info"
            style={{
              border: "2px solid #fff",
              color: "white",
              marginLeft: "9px",
            }}
          >
            {hours[0]} (2D)
          </Button>
        </Link>

        <Link
          to={`/booking/${movieid}`}
          state={{ title, date, hour: hours[1], moviename, movieimage }}
        >
          <Button
            variant="outline-info"
            style={{
              border: "2px solid #fff",
              color: "white",
              marginLeft: "9px",
            }}
          >
            {hours[1]} (2D)
          </Button>
        </Link>
        <Link
          to={`/booking/${movieid}`}
          state={{ title, date, hour: hours[2], moviename, movieimage }}
        >
          <Button
            variant="outline-info"
            style={{
              border: "2px solid #fff",
              color: "white",
              marginLeft: "9px",
            }}
          >
            {hours[2]} (2D)
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardTimers;
