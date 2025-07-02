import React from 'react';
import './Project.css';


interface ProjectProps {
  photo: string; 
  title: string;
  text: string;
}

export const Project = ({photo, title, text}:ProjectProps) =>{
    return(
        <div className='project-container'>
            <div className='project'>
                <img src={photo} alt={title} className='project-image'/>
                <div className='project-text-block'>
                    <p className='project-title'>{title}</p>
                    <p className='project-text'>{text}</p>
                </div>
                
            </div>
        </div>
    );
}