import "./cinemas.css";
import { useNavigate } from "react-router-dom";

const CinemaHeader = () => {
  const navigate = useNavigate();

  return (
    <div id="cover">
      <div>
        <h2 id="coverH">Cinemas</h2>
        <ul>
          <li
            id="firstli"
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            HOME
          </li>
          <li className="liWhite">|</li>
          <li className="liWhite">Cinemas</li>
        </ul>
      </div>
    </div>
  );
};

export default CinemaHeader;
