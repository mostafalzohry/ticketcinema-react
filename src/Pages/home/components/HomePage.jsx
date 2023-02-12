import SlideHeader from "./SlideHeader";
import NowShowing from "./NowShowing";
import Coming from "./Coming";
import Locations from "./Locations";

function Homepage(props) {
  return (
    <>
      <SlideHeader movies={props.movies} />
      <NowShowing movies={props.movies} />
      <Coming movies={props.movies} />
      <Locations />
    </>
  );
}

export default Homepage;
