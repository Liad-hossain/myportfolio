import "./Project.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context";
import { projectData } from "./projectData";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="project" id="Project">
      <div className='project-title-comp'>
          <img src={projectData.logo} alt='' className='project-title-logo'/>
          <div className="project-title-text" style={{color: darkMode && 'skyblue'}}>{projectData.title}</div>
      </div>
      <div className='project-underline' style={{backgroundColor: darkMode && 'whitesmoke'}}></div>
      <div className="project-cards-section">
        {projectData.projects.map((item) => (
          <ProjectCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
