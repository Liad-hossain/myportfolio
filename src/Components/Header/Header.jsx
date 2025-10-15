import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Context";
import "./Header.css";
import Toggle from "../Toggle/Toggle";
import HeaderText from "./HeaderText";
import { headerData } from "./headerData";

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  var r = document.querySelector(":root");
  var rs = getComputedStyle(r);

  const resizingWidth = 1100;

  const [isMobile, setIsMobile] = useState(window.innerWidth < resizingWidth);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= resizingWidth);
      if (window.innerWidth > resizingWidth) setShowDropdown(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    setShowDropdown(false);
  };

  return (
    <div
      className="header"
      style={{
        backgroundColor: darkMode && rs.getPropertyValue("--lightBlack"),
      }}
    >
      <div className="header-left">
        <Toggle className="left-toggle" />
      </div>
      <div className="header-right">
        {isMobile ? (
          <>
            <button
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
              style={{ color: darkMode && rs.getPropertyValue("--white") }}
            >
              ☰
            </button>
            {showDropdown && (
              <div
                className="dropdown-menu"
                style={{
                  backgroundColor:
                    darkMode && rs.getPropertyValue("--lightBlack"),
                }}
              >
                {headerData.map((item) => (
                  <div key={item.id} onClick={handleMenuClick}>
                    <HeaderText
                      title={item.title}
                      to={item.to}
                      logo={item.logo}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          headerData.map((item) => (
            <HeaderText
              key={item.id}
              title={item.title}
              to={item.to}
              logo={item.logo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Header;
