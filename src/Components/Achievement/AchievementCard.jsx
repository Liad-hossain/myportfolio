import "./AchievementCard.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

function getComponent(key, value, darkMode) {
  if (value.type === "string") {
    return (
      <div
        className={`ach-card-obj`}
        style={{ color: darkMode && "whitesmoke" }}
      >
        {value.logo && (
          <img src={value.logo} alt="" className={`ach-card-${key}-logo`} />
        )}
        {value.value && (
          <p className={`ach-card-${key}-value`}>{value.value}</p>
        )}
      </div>
    );
  } else if (value.type === "url") {
    return (
      <div
        className={`ach-card-obj`}
        style={{ color: darkMode && "whitesmoke" }}
      >
        {value.logo && value.value && (
          <a
            href={value.value}
            target="_blank"
            rel="noopener noreferrer"
            className="ach-card-url"
            style={{ color: darkMode && "whitesmoke" }}
          >
            <img src={value.logo} alt="" className={`ach-card-${key}-logo`} />
            <p
              className={`ach-card-${key}-value`}
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
          className={`ach-card-${key}-value`}
          style={{ color: darkMode && "whitesmoke" }}
        >
          {value}
        </p>
      )
    );
  }
}

const AchievementCard = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { id, logo, ...info } = props;

  return (
    <div className="ach-card-wrapper">
      {logo && <img src={props.logo} alt="" className="ach-card-logo" />}
      <div className="ach-card-comp">
        {Object.entries(info).map(([key, value]) =>
          Array.isArray(value) ? (
            <div key={key} className={`ach-card-array`}>
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
  );
};

export default AchievementCard;
