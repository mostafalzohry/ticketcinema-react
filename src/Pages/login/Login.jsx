import "./login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="col-sm-4 px-3" style={{ margin: "auto" }}>
        <div className="formBody">
          <h4>Sign In</h4>
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
              marginBottom: "40px",
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
          <FormControlLabel
            sx={{ marginBottom: "15px" }}
            control={<Checkbox defaultChecked />}
            label="Remember Me"
          />
          <button
            type="button"
            class="btn btn-primary"
            style={{
              display: "block",
              width: "100%",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            SIGN IN
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={{ display: "block", width: "100%", fontWeight: "bold" }}
          >
            FORGOT PASSWORD?
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
          <p style={{ color: "black", textAlign: "center" }}>
            Don't have an account?{" "}
            <b
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register Now!
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
