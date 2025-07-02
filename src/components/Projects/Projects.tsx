import React from "react";
import "./Projects.css";
import { Project } from "../Project/Project";
import ProStazh from "../../assets/ProStazh.png";
import Wish from "../../assets/Wish.png";
import Art from '../../assets/Art.png';

interface ProjectData {
  photo: string | any;
  title: string;
  text: string;
}
export const Projects = () => {
  const projectsData: ProjectData[] = [
    {
      photo: ProStazh,
      title: "ПроСтаж",
      text: "Vk mini app позволяющий студентам института и колледжа найти места для практик и стажировок",
    },
    {
      photo: Wish,
      title: "Хотелки",
      text: "VK Mini App Wish лист, позволяющий создать карточки с предметами, которые хотелось бы получить в подарок",
    },
    {
      photo: Art,
      title: 'Искусство',
      text: 'VK Mini App, позволяющий пользователям узнать больше про искусство и художников разных времен'
    }
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="projects-content">
        <h2 className="projects-main-title">Мои проекты</h2>
        <div className="projects-list">
          {projectsData.map((project) => (
            <Project
              key={project.title} 
              photo={project.photo}
              title={project.title}
              text={project.text}
            />
          ))}
        </div>
        <p>
          Также можете посетить мой{" "}
          <a href="https://github.com/B1duk?tab=repositories">GitHub</a>
        </p>
      </div>
    </div>
  );
};
