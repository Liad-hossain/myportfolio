import "./ProblemSolvingCard.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

// TODO: Shift this function to a separate utility file if used in multiple places
function getComponent(key, value, darkMode) {
  if (value.type === "string") {
    return (
      <div
        className={`prob-card-obj`}
        style={{ color: darkMode && "whitesmoke" }}
      >
        {value.logo && (
          <img src={value.logo} alt="" className={`prob-card-${key}-logo`} />
        )}
        {value.value && (
          <p className={darkMode? `prob-card-${key}-value-dark` : `prob-card-${key}-value`}>{value.value}</p>
        )}
      </div>
    );
  } else if (value.type === "url") {
    return (
      <div
        className={`prob-card-obj`}
      >
        {value.value && (
          <a
            href={value.value}
            target="_blank"
            rel="noopener noreferrer"
            className="prob-card-url"
            style={{ color: darkMode && "whitesmoke" }}
          >
            {value.logo && <img src={value.logo} alt="" className={`prob-card-${key}-logo`} />}
            {value.title && 
            <p
              className={`prob-card-${key}-value`}
            >
              {value.title}
            </p>
            }
          </a>
        )}
      </div>
    );
  } else {
    return (
      value && (
        <p
          className={darkMode? `prob-card-${key}-value-dark` : `prob-card-${key}-value`}
          style={{ color: darkMode && "whitesmoke" }}
        >
          {value}
        </p>
      )
    );
  }
}

const ProblemSolvingCard = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { id, logo, ...info } = props;

  return (
    <div className="prob-card-wrapper">
      {logo && <img src={props.logo} alt="" className="prob-card-logo" />}
      <div className="prob-card-comp">
        {Object.entries(info).map(([key, value]) =>
          Array.isArray(value) ? (
            <div key={key} className={`prob-card-array`}>
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

export default ProblemSolvingCard;
