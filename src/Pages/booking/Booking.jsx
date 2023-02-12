import "./booking.css";
import { Col, Container, Row } from "react-bootstrap";
import BookingDetails from "./BookingDetails";
import BookingSeats from "./BookingSeats";

const Booking = (props) => {
  return (
    <div className="booking-body">
      <Container>
        <Row>
          <Col lg="4">
            <BookingDetails movies={props.movies} />
          </Col>
          <Col lg="8">
            <BookingSeats />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
