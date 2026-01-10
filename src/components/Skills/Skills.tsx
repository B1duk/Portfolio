import React from 'react';
import './Skills.css';

import react from '../../assets/React.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import figma from '../../assets/figma.png';
import sql from '../../assets/sql.png';
import styled from '../../assets/styled.jpg'
import git from '../../assets/git.png'
import supabase from '../../assets/supabase.png'
export const Skills = () => {
  const skills = [
    { img: react, name: 'react' },
    { img: html, name: 'html' },
    { img: css, name: 'css' },
    { img: js, name: 'js' },
    { img: figma, name: 'figma' },
    { img: sql, name: 'sql' },
    {img: styled, name:'styled-components'},
    {img: git, name:'git'},
    {img: supabase, name: 'supabase'}
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