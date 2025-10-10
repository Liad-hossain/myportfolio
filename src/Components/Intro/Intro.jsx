import { useContext } from "react";
import "./Intro.css";
import { ThemeContext } from "../../Context";
import Me from "../../img/profile.jpeg";
import { introData } from "./introData";


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
        <span className="i-name">{introData.name}</span>
        <div className="i-box">
          <div className="i-box-wrapper">
            {introData.titles.map((item) => (
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
          {introData.description}
        </div>

        <a href={introData.resume} download className="i-link">
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
