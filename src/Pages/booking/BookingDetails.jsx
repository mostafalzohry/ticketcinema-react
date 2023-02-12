import seat from "../../../src/assets/seat.png";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BookingDetails = (props) => {
  const location = useLocation();

  const { title } = location.state;
  const { date } = location.state;
  const { hour } = location.state;
  const { moviename } = location.state;
  const { movieimage } = location.state;
  const navigate = useNavigate();

  return (
    <>
      <div className="movie-details-card booking-headline-black d-flex p-3 justify-content-evenly">
        <div>
          <img
            src={movieimage}
            alt=""
            style={{ height: "90%", width: "55px" }}
          />
        </div>
        <div>
          <div> {moviename}</div>
          <div>{title} / Screen 1</div>
          <div>
            <WatchLaterIcon /> {date} / {hour}
          </div>
          <div> {title}</div>
        </div>
      </div>
      <div>
        <div className="booking-headline">Seat Categories</div>
        <div>
          <ul className="list_types_of_booking">
            <li>
              <span>
                <img src={seat} alt="" />
              </span>
              {`Regular ( 100 EGP )`}
            </li>
            <li>
              <span className="book_type_lock book_space"></span>Your Choice
            </li>
            <li>
              <span className="book_type_locked book_space"></span>Unavailable
            </li>
          </ul>
        </div>
      </div>
      <div className="booking-headline">Maximum time for your reservation</div>
      <div className="booking-headline">Count Down here</div>
      <div className="d-flex flex-column">
        <button id="btnBook">
          <Link
            to={`/checkout`}
            state={{ title, date, moviename, hour }}
            style={{ textDecoration: "none", color: "white" }}
          >
            BOOK NOW
          </Link>
        </button>
        <button id="btnCancel" onClick={() => navigate("/")}>
          CANCEL
        </button>
      </div>
    </>
  );
};

export default BookingDetails;
