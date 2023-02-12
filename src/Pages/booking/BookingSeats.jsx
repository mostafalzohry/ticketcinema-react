import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import screen from "../../../src/assets/screen.png";
import seatImg from "../../../src/assets/seat.png";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useLocation } from 'react-router-dom'

const BookingSeats = () => {
  const [seats, setSeats] = useState([]);
  const [fetching, isFetching] = useState(false);


  const location = useLocation()

  const { title } = location.state
  const {date} = location.state
  const {hour} = location.state
  //Get all seat state from Fake APi
  const fetchData = async () => {
    const res = await axios
      .get("https://63088fe746372013f5807109.mockapi.io/Seats")
      .then((res) => {
        setSeats(res.data);
      });
  };

  //Put on Api
  const reserveSeat = async (id, status) => {
    isFetching(true);
    const res = await axios
      .put(`https://63088fe746372013f5807109.mockapi.io/Seats/${+id}`, {
        isReserved: !status,
      })
      .then(() => {
        fetchData();
        isFetching(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="movie-details-card">
      <div className="booking-headline-black">
        {title} <WatchLaterIcon /> {date} / {hour}
      </div>
      <div className="screen-container">
        <img src={screen} className="cinema-screen" alt="" />
      </div>
      <div className="seats-container ">
        {fetching ? (
          <div className="seats-block d-flex justify-content-center align-items-center">
            <Spinner animation="border" />
          </div>
        ) : null}
        {seats.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          seats.map((seat) =>
            seat.isReserved == true ? (
              <span
                className="book_type_lock book_space"
                onClick={() => {
                  reserveSeat(seat.id, seat.isReserved);
                }}
              />
            ) : (
              <img
                onClick={() => {
                  reserveSeat(seat.id, seat.isReserved);
                }}
                className="seat"
                src={seatImg}
                alt=""
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default BookingSeats;
