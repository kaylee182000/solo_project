import React from "react";
import Twi from "../Images/twitter.png";
import Facebook from "../Images/face.png";
import Insta from "../Images/insta.png";
import GitHub from "../Images/git.png";

export default function Footer() {
  return (
    <div className="footer">
      <span>
        <img src={Twi} alt="" />
      </span>
      <span>
        <img src={Facebook} alt="" />
      </span>
      <span>
        <img src={Insta} alt="" />
      </span>
      <span>
        <img src={GitHub} alt="" />
      </span>
    </div>
  );
}
