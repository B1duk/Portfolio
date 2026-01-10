import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import Photo from '../../assets/Photo.png';
export const About =()=>{

    const [displayedName, setDisplayedName] = useState('');
    const fullName = 'Влад Бидюков';
    const typingSpeed = 150; useRef<number | null>(null);

    useEffect(() => {
    let i = 0;
    let intervalId: number;
    const delay = 500; 

    const timeoutId = setTimeout(() => {
        intervalId = window.setInterval(() => {
            if (i < fullName.length) {
                setDisplayedName(fullName.substring(0, i + 1));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, typingSpeed);
    }, delay);

    return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
    };
}, []);
    return(
        <div className='about-container'>
            <div className='about'>
                <div className='about-text-block'>
                    <h2 className='about-title'> {displayedName}
                        {displayedName.length < fullName.length && (
                            <span className='cursor'>|</span>
                        )}</h2>
                    <p className='about-text'>Я учусь на 3 курсе МИДиС по направлению «Разработка веб - и мобильных приложений»,
                    также имею диплом «Техник-программист». За годы обучения и практики я освоил ключевые технологии веб-разработки.
                    Работаю с базами данных, REST API, системами контроля версий и современными инструментами сборки.
                    Стремлюсь создавать не просто функциональные, а удобные решения, уделяя внимание как архитектуре кода, так и пользовательскому опыту.</p>
                </div>
                <img src={Photo} alt='My Photo' className='about-image' loading='eager'/>
                
            </div>
            </div>
    );
}