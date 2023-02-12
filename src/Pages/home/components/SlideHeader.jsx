import "./styleSheets/slider.css";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SlideHeader = (props) => {
  const slide1 = props?.movies?.[0];
  const slide2 = props?.movies?.[1];
  const slide3 = props?.movies?.[2];
  const slide4 = props?.movies?.[3];
  const navigate = useNavigate();

  return (
    <div>
      <Carousel fade>
        <Carousel.Item
          onClick={() => {
            navigate(`/details/${slide4?.id}`, { replace: true });
          }}
        >
          <img
            className="d-block w-100"
            src={slide4?.cover}
            alt="First slide"
          />
          <Carousel.Caption style={{ cursor: "pointer" }}>
            <p className="sliderP">Now Showing</p>
            <h3 className="sliderTitle">{slide4?.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          onClick={() => {
            navigate(`/details/${slide3?.id}`, { replace: true });
          }}
        >
          <img
            className="d-block w-100"
            src={slide3?.cover}
            alt="Second slide"
          />
          <Carousel.Caption style={{ cursor: "pointer" }}>
            <p className="sliderP">Now Showing</p>
            <h3 className="sliderTitle">{slide3?.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          onClick={() => {
            navigate(`/details/${slide2?.id}`, { replace: true });
          }}
        >
          <img
            className="d-block w-100"
            src={slide2?.cover}
            alt="Third slide"
          />
          <Carousel.Caption style={{ cursor: "pointer" }}>
            <p className="sliderP">Now Showing</p>
            <h3 className="sliderTitle">{slide2?.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideHeader;
