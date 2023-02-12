import "./contactCover.css";
import { useNavigate } from "react-router-dom";

const ContactCover = () => {
  const navigate = useNavigate();

  return (
    <div id="cover">
      <div>
        <h2 id="coverH">Contact</h2>
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
          <li className="liWhite">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactCover;
