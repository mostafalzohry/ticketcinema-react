import "./styleSheets/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://www.rnscinemas.net/public/assets/img/bg/footer_bg.jpg")`,
          textAlign: "center",
        }}
      >
        <img
          src="https://www.rnscinemas.net/public/logo.png"
          alt=""
          style={{
            width: 130,
            height: 75,
            marginTop: 70,
            marginBottom: 40,
          }}
        />
        <div
          style={{
            width: "80%",
            margin: "auto",
            borderTop: "1px inset black",
          }}
        >
          <div className="row">
            <div className="col-sm-7">
              <ul id="quickLinks">
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="/">NOW SHOWING</a>
                </li>
                <li>
                  <a href="/soon">COMING SOON</a>
                </li>
                <li>
                  <a href="/cinemas">CINEMAS</a>
                </li>
                <li>
                  <a href="/contact">CONTACT</a>
                </li>
                <li>
                  <a href="#">PRIVACY POLICY</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-5">
              <ul style={{ textAlign: "right" }}>
                <li
                  className="social"
                  onClick={() =>
                    window.location.replace(`https://www.facebook.com`)
                  }
                >
                  <FacebookIcon />
                </li>

                <li
                  className="social mx-2"
                  onClick={() =>
                    window.location.replace(`https://www.instagram.com`)
                  }
                >
                  <InstagramIcon />
                </li>
                <li
                  className="social"
                  onClick={() =>
                    window.location.replace(`https://www.youtube.com`)
                  }
                >
                  <YouTubeIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#171b22", padding: "25px 0" }}>
          <div
            style={{
              width: "80%",
              margin: "auto",
              borderTop: "1px inset black",
            }}
          >
            <div className="row">
              <div
                style={{
                  color: "#bcbcbc",
                  fontSize: 13,
                  fontWeight: 500,
                  textAlign: "left",
                }}
                className="col-sm-6"
              >
                © 2022 All Rights Reserved By Renaissance Cinemas
              </div>
              <div className="col-sm-6" style={{ textAlign: "right" }}>
                <img
                  src="https://www.rnscinemas.net/public/paymob_login_logo.png"
                  alt=""
                  style={{ width: 350, height: 35 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
