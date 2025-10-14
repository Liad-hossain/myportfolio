import "./ContactCard.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

// TODO: Shift this function to a separate utility file if used in multiple places
function getComponent(key, value, darkMode) {
  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);

  if (value.type === "string") {
    return (
      <div
        className={`contact-card-obj`}
        style={{ color: darkMode && "whitesmoke" }}
      >
        {value.logo && (
          <img src={value.logo} alt="" className={`contact-card-${key}-logo`} />
        )}
        {value.value && (
          <p className={darkMode? `contact-card-${key}-value-dark` : `contact-card-${key}-value`}>{value.value}</p>
        )}
      </div>
    );
  } else if (value.type === "url") {
    return (
      <div
        className={`contact-card-obj`}
      >
        {value.value && (
          <a
            href={value.value}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-url"
            style={{ color: darkMode && "whitesmoke" }}
          >
            {value.logo && <value.logo color='blue' className={`contact-card-${key}-logo`} />}
            {value.title && 
            <p
              className={`contact-card-${key}-value`}
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
        className={`contact-card-box`}
        style={{backgroundColor: darkMode && rs.getPropertyValue('--white')}}
      >
        {value.logo && (
          <img src={value.logo} alt="" className={`contact-card-${key}-logo`} />
        )}
        {value.value && (
          <p 
           className={darkMode? `contact-card-${key}-value-dark` : `contact-card-${key}-value`}
           style={{color: darkMode && rs.getPropertyValue('--lightBlack')}}
          >{value.value}</p>
        )}
      </div>
    );
  } else {
    return (
      value.value && (
        <p
          className={darkMode? `contact-card-${key}-value-dark` : `contact-card-${key}-value`}
          style={{ color: darkMode && "whitesmoke" }}
        >
          {value.value}
        </p>
      )
    );
  }
}

const ContactCard = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { logo, title, ...info } = props;

  return (
    <div className="contact-card-wrapper">
      <div className="contact-card-left">
        {Object.entries(info).map(([key, value]) =>
          Array.isArray(value) ? (
            <div key={key} className={`contact-card-array`}>
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
     {logo && <img src={props.logo} alt="" className="contact-card-right" />}

    </div>
  );
};

export default ContactCard;
