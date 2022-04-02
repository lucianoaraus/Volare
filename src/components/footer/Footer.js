import React from "react";

import logo from "../../assets/volare-logo-white.png";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./footer.css";

const socialMediaIcon = {
  fontSize: 32,
  padding: 0.7,
  border: 1 | "solid" | "white",
  borderRadius: 100,
};

function Footer() {
  return (
    <footer className="footer-container">
      <div className="left-side-container">
        <img src={logo} alt="logo-brand" style={{ marginBottom: 20 }} />
        <a href="/">About Us</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Privacy</a>
        <a href="/">FAQs</a>
      </div>
      <div className="right-side-container">
        <div className="footer-contact-container">
          <LocalPhoneIcon sx={{ fontSize: 18 }} />
          <p>+54 11 6123-0472</p>
        </div>
        <div className="footer-contact-container">
          <MailIcon sx={{ fontSize: 18 }} />
          <p>lucianoaraus97@gmail.com</p>
        </div>
        <div className="footer-contact-container">
          <LocationOnIcon sx={{ fontSize: 18 }} />
          <p>333, Lorem Street, Albania, California United States of America</p>
        </div>
        <div className="social-media-container">
          <button>
            <FacebookIcon sx={socialMediaIcon} />
          </button>
          <button>
            <TwitterIcon sx={socialMediaIcon} />
          </button>
          <button>
            <InstagramIcon sx={socialMediaIcon} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
