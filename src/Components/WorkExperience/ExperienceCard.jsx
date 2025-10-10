import "./ExperienceCard.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

function getComponent(key, value, darkMode) {
  if (value.type === "string") {
    return (
      <div
        className={`exp-card-obj`}
        style={{ color: darkMode && "whitesmoke" }}
      >
        {value.logo && (
          <img src={value.logo} alt="" className={`exp-card-${key}-logo`} />
        )}
        {value.value && (
          <p className={`exp-card-${key}-value`}>{value.value}</p>
        )}
      </div>
    );
  } else if (value.type === "url") {
    return (
      <div
        className={`exp-card-obj`}
        style={{ color: darkMode && "whitesmoke" }}
      >
        {value.logo && value.value && (
          <a
            href={value.value}
            target="_blank"
            rel="noopener noreferrer"
            className="exp-card-url"
            style={{ color: darkMode && "whitesmoke" }}
          >
            <img src={value.logo} alt="" className={`exp-card-${key}-logo`} />
            <p
              className={`exp-card-${key}-value`}
              style={{ color: darkMode && "whitesmoke" }}
            >
              {value.title}
            </p>
          </a>
        )}
      </div>
    );
  } else {
    return (
      value && (
        <p
          className={`exp-card-${key}-value`}
          style={{ color: darkMode && "whitesmoke" }}
        >
          {value}
        </p>
      )
    );
  }
}

const ExperienceCard = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { id, logo, responsibilities, ...info } = props;
  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);

  return (
    <div className="exp-card-wrapper">
      <div
        className="exp-card-header"
        style={{ color: darkMode && "whitesmoke" }}
      >
        <img src={props.logo} alt="" className="exp-card-header-logo" />
        <div className="exp-card-header-comp">
          {Object.entries(info).map(([key, value]) =>
            Array.isArray(value) ? (
              <div key={key} className={`exp-card-array`}>
                {value.map((item, index) => (
                  <div key={`${key}-${index}`}>
                    {getComponent(`${key}-${index + 1}`, item, darkMode)}
                  </div>
                ))}
              </div>
            ) : typeof value === "object" ? (
              <div key={key}>{getComponent(key, value, darkMode)}</div>
            ) : (
              <div key={key}>{getComponent(key, value, darkMode)}</div>
            )
          )}
        </div>
      </div>
      <div className="exp-card-body" style={{color: darkMode && rs.getPropertyValue('--skyBlue')}}>
        {responsibilities &&
          responsibilities.map((resp) => (
            <div key={resp.id} className="responsibility-section">
              <h3
                className="responsibility-title"
                style={{ color: darkMode && rs.getPropertyValue('--skyBlue') }}
              >
                {resp.title}
              </h3>
              <ul className="responsibility-items">
                {resp.workedItems.map((item) => (
                  <li
                    key={item.id}
                    className="responsibility-item"
                    style={{ color: darkMode ? "whitesmoke" : "inherit" }}
                  >
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
