import "./Achievement.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context";
import { achievementData } from "./achievementData";
import AchievementCard from "./AchievementCard";

const Achievement = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="ach" id="Achievement">
      <div className='ach-title-comp'>
          <img src={achievementData.logo} alt='' className='ach-title-logo'/>
          <div className="ach-title-text" style={{color: darkMode && 'skyblue'}}>{achievementData.title}</div>
      </div>
      <div className='ach-underline' style={{backgroundColor: darkMode && 'whitesmoke'}}></div>
      <div className="ach-cards-section">
        {achievementData.achievements.map((item) => (
          <AchievementCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
