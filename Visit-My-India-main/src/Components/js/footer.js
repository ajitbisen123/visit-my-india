import React from "react";
import LinkedIn from "../../utils/fotter_Img/linkedin.png";
import Youtube from "../../utils/fotter_Img/youtube.png";
import Instagram from "../../utils/fotter_Img/insta.png";
import Whatsapp from "../../utils/fotter_Img/whatsapp.png";
import { Link } from "react-router-dom";

let Social = {
  height: "45px",
  width: "45px",
  borderRadius: "10px",
  margin: "10px 10px",
  cursor: "pointer",
};

let foot = {
  color: "white",
  padding: "0.2rem 2rem",
};

export const Footer = () => {
  return (
    <footer className="f-style">
      <div className="G1">
        <div>
          <a href='www.linkedin.com/in/ajit-kumar-bisen-27a55a24b' target={'_blank'} rel="noopener noreferrer">
          <img alt="pics1" style={Social} src={LinkedIn} />
          </a>
          <a href='https://www.youtube.com/channel/UC9BLb9eDYszdxiFVJDUX5Dw' target={'_blank'} rel="noopener noreferrer">
          <img alt="pics2" style={Social} src={Youtube} />
          </a>
          <a href='https://www.instagram.com/programmerlife.2002/' target={'_blank'} rel="noopener noreferrer">
          <img alt="pics3" style={Social} src={Instagram} />
          </a>
          <a href='https://wa.me/+919399170290' target={'_blank'} rel="noopener noreferrer">
          <img alt="pics4" style={Social} src={Whatsapp} />
          </a>
        </div>
        <h2 id="logoName">Visit My India</h2>
        <Link to="/contribute">
        <h2 className="list contri">Contribute Us</h2>
        </Link>
      </div>
      <h3 style={foot}>All Rights Reserved by &copy; visit-my-india.com</h3>
      <h3 style={foot}>Thanks for Visit our Website</h3>
      <br />
    </footer>
  );
};
