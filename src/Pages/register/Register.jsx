import "./register.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register">
      <div className="col-sm-4 px-3" style={{ margin: "auto" }}>
        <div className="formBody">
          <h4>Create An Account</h4>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "15px",
            }}
          >
            <PersonIcon sx={{ mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Your Name"
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "15px",
            }}
          >
            <EmailIcon sx={{ mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Your Email"
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "15px",
            }}
          >
            <LockIcon sx={{ mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Your Password"
              variant="standard"
              sx={{ width: "100%" }}
              type="password"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "55px",
            }}
          >
            <EnhancedEncryptionIcon sx={{ mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Repeat Your Password"
              variant="standard"
              sx={{ width: "100%" }}
              type="password"
            />
          </Box>
          <button
            type="button"
            class="btn btn-primary"
            style={{ display: "block", width: "100%", fontWeight: "bold" }}
          >
            REGISTER
          </button>
          <div className="socialLogin">
            <span style={{ color: "black" }}>OR CONNECT WITH</span>
            <ul>
              <li className="loginTwit">
                <TwitterIcon />
              </li>
              <li className="loginGoogle">
                <GoogleIcon />
              </li>
            </ul>
          </div>
          <p style={{ color: "black" }}>
            Do you have an account?{" "}
            <b
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login Now!
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
