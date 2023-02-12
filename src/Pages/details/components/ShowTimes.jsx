import "./showTimes.css";
import { useState } from "react";
import CardTimers from "./CardTimers";
import moment from "moment";

const ShowTimes = (props) => {
  const [datee, setdatee] = useState();

  let id = props.id;
  let moviename = props.moviename;
  let movieposter = props.movieposter;

  let today = moment().format("dddd MMMM Do");
  let tommorw = moment().add(1, "days").format("dddd MMMM Do");
  let aftertomorw = moment().add(2, "days").format("dddd MMMM Do");

  return (
    <div
      style={{
        backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/footer_bg.jpg")`,
        padding: "5rem 0 8rem 0",
      }}
    >
      <div style={{ width: "80%", margin: "auto" }}>
        <h2 id="showTitle">
          <img src="https://www.rnscinemas.net/public/tick.png" alt=""></img>
          {"  "}
          {moviename} - Showtimes and Online Booking
        </h2>
        <div className="line1"></div>
        <ul style={{ padding: "0" }}>
          <li
            className="today"
            onClick={() => {
              setdatee(today);
              console.log(datee);
            }}
          >
            {today}
          </li>

          <li
            className="today"
            onClick={() => {
              setdatee(tommorw);
              console.log(datee);
            }}
          >
            {tommorw}
          </li>

          <li
            className="today"
            onClick={() => {
              setdatee(aftertomorw);
              console.log(datee);
            }}
          >
            {aftertomorw}
          </li>
        </ul>

        <CardTimers
          Title="Madinty"
          date={datee}
          moviename={moviename}
          movieimage={movieposter}
          id={id}
        />
        <CardTimers
          Title="San Stephano"
          date={datee}
          moviename={moviename}
          movieimage={movieposter}
          id={id}
        />
        <CardTimers
          Title="Nile City"
          date={datee}
          moviename={moviename}
          movieimage={movieposter}
          id={id}
        />
        <CardTimers
          Title="Al Rehab"
          date={datee}
          moviename={moviename}
          movieimage={movieposter}
          id={id}
        />
        <CardTimers
          Title="DownTown"
          date={datee}
          moviename={moviename}
          movieimage={movieposter}
          id={id}
        />
        <CardTimers
          Title="Dandy Mall"
          date={datee}
          moviename={moviename}
          movieimage={movieposter}
          id={id}
        />

        <div className="line2"></div>
      </div>
    </div>
  );
};

export default ShowTimes;
