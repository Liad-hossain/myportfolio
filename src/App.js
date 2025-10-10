import Intro from "./Components/Intro/Intro"
import Education from "./Components/Education/Education"
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Skill from "./Components/Skill/Skill"
import Honor from "./Components/Honor/Honor";
import Project from "./Components/Project/Project";
import Achievement from "./Components/Achievement/Achievement";
import Contact from "./Components/Contact/Contact";
import "./App.css"
import { useContext } from "react";
import { ThemeContext } from "./Context";
import Touch from "./Components/Touch/Touch";
import Header from "./Components/Header/Header";

function App() {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  var r=document.querySelector(':root');
  var rs=getComputedStyle(r);
  return (
    <div className="app" style={{backgroundColor: darkMode && rs.getPropertyValue('--lightBlack')}}>
      <Header/>
      <Intro/>
      <Education/>
      <WorkExperience/>
      <Skill/>
      <Achievement/>
      <Honor/>
      <Project/>
      <Touch/>
      <Contact/>
    </div>
  );
}

export default App;
