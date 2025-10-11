import "./ProblemSolving.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context";
import { problemSolvingData } from "./problemSolvingData";
import ProblemSolvingCard from "./ProblemSolvingCard";

const ProblemSolving = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="prob" id="ProblemSolving">
      <div className='prob-title-comp'>
          <img src={problemSolvingData.logo} alt='' className='prob-title-logo'/>
          <div className="prob-title-text" style={{color: darkMode && 'skyblue'}}>{problemSolvingData.title}</div>
      </div>
      <div className='prob-underline' style={{backgroundColor: darkMode && 'whitesmoke'}}></div>
      <div className="prob-cards-section">
        {problemSolvingData.activities.map((item) => (
          <ProblemSolvingCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default ProblemSolving;
