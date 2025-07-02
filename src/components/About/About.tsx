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
                    <p className='about-text'>Я учусь на втором курсе института по 
                        направлению разработка веб и мобильных приложений. 
                        Также за плечами имею диплом по специальности 
                        техник программист. Могу быть полезен в поддержании и
                        разработки уже существующего продукта или готов 
                        принять участие в абсолютно новом проекте </p>
                </div>
                <img src={Photo} alt='My Photo' className='about-image' loading='eager'/>
                
            </div>
            </div>
    );
}