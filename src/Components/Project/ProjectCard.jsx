import "./ProjectCard.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

// TODO: Shift this function to a separate utility file if used in multiple places
function getComponent(key, value, darkMode) {
  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);

  if (value.type === "string") {
    return (
      <div
        className={`project-card-obj`}
        style={{ color: darkMode && "whitesmoke" }}
      >
        {value.logo && (
          <img src={value.logo} alt="" className={`project-card-${key}-logo`} />
        )}
        {value.value && (
          <p className={darkMode? `project-card-${key}-value-dark` : `project-card-${key}-value`}>{value.value}</p>
        )}
      </div>
    );
  } else if (value.type === "url") {
    return (
      <div
        className={`project-card-obj`}
      >
        {value.value && (
          <a
            href={value.value}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-url"
            style={{ color: darkMode && "whitesmoke" }}
          >
            {value.logo && <img src={value.logo} alt="" className={`project-card-${key}-logo`} />}
            {value.title && 
            <p
              className={`project-card-${key}-value`}
            >
              {value.title}
            </p>
            }
          </a>
        )}
      </div>
    );
  } else if (value.type === "box") {
    return (
      <div
        className={`project-card-box`}
        style={{backgroundColor: darkMode && rs.getPropertyValue('--white')}}
      >
        {value.logo && (
          <img src={value.logo} alt="" className={`project-card-${key}-logo`} />
        )}
        {value.value && (
          <p 
           className={darkMode? `project-card-${key}-value-dark` : `project-card-${key}-value`}
           style={{color: darkMode && rs.getPropertyValue('--lightBlack')}}
          >{value.value}</p>
        )}
      </div>
    );
  } else {
    return (
      value.value && (
        <p
          className={darkMode? `project-card-${key}-value-dark` : `project-card-${key}-value`}
          style={{ color: darkMode && "whitesmoke" }}
        >
          {value.value}
        </p>
      )
    );
  }
}

const ProjectCard = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { id, logo, ...info } = props;

  return (
    <div className="project-card-wrapper">
      {logo && <img src={props.logo} alt="" className="project-card-logo" />}
      <div className="project-card-comp">
        {Object.entries(info).map(([key, value]) =>
          Array.isArray(value) ? (
            <div key={key} className={`project-card-array`}>
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

export default ProjectCard;
