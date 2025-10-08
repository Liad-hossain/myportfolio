import React, { useContext } from "react";
import "./Intro.css";
import { ThemeContext } from "../../Context";
import Me from "../../img/profile.jpeg";
import Resume from "../../img/Md_Liad_Hossain_resume.pdf";
import { titles } from "./titles";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const r = document.querySelector(":root");
  const rs = getComputedStyle(r);
  return (
    <div className="i" id="Intro">
      <div className="i-left">
        <div className="i-title">
          <span
            className="i-title-1"
            style={{ color: darkMode && rs.getPropertyValue("--white") }}
          >
            Hi!{" "}
          </span>
          <span
            className="i-title-2"
            style={{ color: darkMode && rs.getPropertyValue("--softPink") }}
          >
            I'm
          </span>
        </div>
        <br />
        <span className="i-name">MD Liad Hossain</span>
        <div className="i-box">
          <div className="i-box-wrapper">
            {titles.map((item) => (
              <p
                className="i-box-item"
                style={{ color: darkMode && rs.getPropertyValue("--skyBlue") }}
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>
        <div
          className="i-desc"
          style={{ color: darkMode && rs.getPropertyValue("--white") }}
        >
          A passionate software engineer with a solid backgroud in competitive
          programming, who has a great understanding of data structures and
          algorithms, also loves to solve problems, learn new technologies and implement innovative ideas together.
        </div>

        <a href={Resume} download className="i-link">
          <div
            className="i-button"
            style={{ color: darkMode && rs.getPropertyValue("--white") }}
          >
            Download My CV
          </div>
        </a>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-right-img" />
      </div>
    </div>
  );
};

export default Intro;
