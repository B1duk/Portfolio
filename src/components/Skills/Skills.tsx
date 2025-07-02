import React from 'react';
import './Skills.css';

import react from '../../assets/React.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import onec from '../../assets/onec.png';
import csharp from '../../assets/csharp.png';
import figma from '../../assets/figma.png';
import sql from '../../assets/sql.png';

export const Skills = () => {
  const skills = [
    { img: react, name: 'react' },
    { img: html, name: 'html' },
    { img: css, name: 'css' },
    { img: js, name: 'js' },
    { img: onec, name: 'onec' },
    { img: csharp, name: 'csharp' },
    { img: figma, name: 'figma' },
    { img: sql, name: 'sql' }
  ];

  return (
    <div id="skills" className="skills-container">
      <div className="skills-content">
        <h2 className="skills-title">Мои навыки</h2>
        <div className="skills-flex-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img 
                src={skill.img} 
                alt={skill.name}
                className="skill-image"
                title={skill.name} 
                loading='eager'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};