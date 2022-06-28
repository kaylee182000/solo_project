import React from "react";
import Ava from "../Images/pic1.png";

export default function Info() {
  return (
    <div className="info">
      <img src={Ava} alt="" className="ava" />
      <h1>LAURA SMITH</h1>
      <h3>Frontend Developer</h3>
      <h5>laurasmith.website</h5>
      <div className="btn">
        <button type="button" className="mail">
          Email
        </button>
        <button type="button" className="linkedin">
          Linkedin
        </button>
      </div>
    </div>
  );
}
