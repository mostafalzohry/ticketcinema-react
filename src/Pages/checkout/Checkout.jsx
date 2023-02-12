import "./checkout.css";
import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const location = useLocation();
  const { date } = location.state;
  const { title } = location.state;
  const { moviename } = location.state;
  const { hour } = location.state;
  return (
    <div className="checkOut">
      <div className="container text-center">
        <h1 id="checkTitle">Review and complete your booking</h1>
        <div className="row" style={{ paddingBottom: "150px" }}>
          {/* Check-Details */}
          <div className="col-sm-6 mt-2">
            <div className="checkDetails">
              <ul>
                <li>Movie : {moviename}</li>
                <li>Location : {title}</li>
                <li>
                  <WatchLaterIcon /> {date} / {hour}
                </li>
              </ul>
              <div id="reservDetails">
                <h5>Reservation Deatils: 1 Seat(s)</h5>
              </div>
              <div>
                <span className="spanLeft">
                  {moviename} - {title} - {date} / {hour} - VIP - A5
                </span>
                <span className="spanRight">100 EGP</span>
              </div>
              <div className="spanLeft">
                <span>Online Booking Fees </span>
                <span className="spanRight">5 EGP</span>
              </div>
              <div>
                <span className="spanLeft">Total</span>
                <span className="spanRight">105 EGP</span>
              </div>
            </div>
          </div>

          {/* Check-Form */}
          <div className="col-sm-6 mt-2">
            <div className="checkForm">
              <h5 id="checkText">
                Your movie awaits, just a few details to record your booking.
              </h5>
              <div id="checkBtns">
                <button onClick={() => navigate("/login")}>
                  <LoginIcon /> Already Registered? Sign In
                </button>
                <button onClick={() => navigate("/register")}>
                  Don't Have An Account?
                </button>
              </div>
              <p id="socialText">
                - LOGIN OR CREATE ACCOUNT USING YOUR SOCIAL MEDIA PROFILE -
              </p>
              <div id="socialBtns">
                <button id="gogleBtn">
                  <GoogleIcon />
                </button>
                <button id="twitBtn">
                  <TwitterIcon />
                </button>
              </div>
              <h4 id="formHeader">
                <PersonIcon /> Continue As Guest
              </h4>
              <div className="row checkInputs">
                <div className="col-md-6">
                  <label htmlFor="checkMail">Your Email</label>
                  <input type="text" id="checkMail" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="checkName">Your Name</label>
                  <input type="text" id="checkName" />
                </div>
                <div className="col-md-12">
                  <label htmlFor="checkPhone">Phone Number</label>
                  <input type="text" id="checkPhone" />
                </div>
              </div>
              <div>
                <div id="payTitle">
                  <h5 id="payTitle">Payment Method</h5>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <input type="checkbox" />{" "}
                    <label htmlFor=""> Credit/Debit Card</label>
                  </div>
                  <div id="payImg">
                    <img
                      src="https://waffarha.com/images/steps/accordion/visa.png"
                      alt=""
                    />
                  </div>
                </div>
                <div id="payBtns">
                  <button style={{ marginRight: "5px" }}>
                    <ArrowBackIcon /> CHANGE BOOKING
                  </button>
                  <button>
                    PAY NOW <ArrowForwardIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
