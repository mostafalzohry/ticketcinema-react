import "./soon.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const Soon = (props) => {
  const soonFilms = props.movies?.slice(4, 24);
  const navigate = useNavigate();

  return (
    <div className="soon">
      <div style={{ width: "80%", margin: "auto" }}>
        <p id="soonText">
          FIND THE LATEST NEW MOVIES COMING SOON TO RENAISSANCE CINEMAS
        </p>
        <h2 id="soonTitle">Coming Soon</h2>
        <span
          className="bg-info d-block mx-auto rounded-bottom"
          style={{ width: 100, height: 5 }}
        ></span>
        <span
          className="bg-info d-block mb-5 mx-auto rounded-bottom"
          style={{ width: 28, height: 4 }}
        ></span>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            {soonFilms?.map((movie, index) => (
              <Grid item xs={2} sm={4} md={2} key={index}>
                <div>
                  <div id="moviePoster">
                    <img
                      src={movie.poster}
                      alt=""
                      onClick={() => {
                        navigate(`/details/${movie.id}`, { replace: true });
                      }}
                    />
                  </div>
                  <div id="movieDetails">
                    <h5>{movie.name}</h5>
                    <h6>{movie.released}</h6>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Soon;
