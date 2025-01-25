import React, { useState, useEffect } from 'react';
import './intro.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const texts = ["Developer", "Designer", "Creator", "Innovator"];

export default function Intro() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Change text every 2 seconds
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div id='home' className="intro" style={{ textAlign: 'left' }}>
            <h1 className='name'>👋 Hi! It's Dinithi Dewmini</h1>
            <p>An IT undergraduate passionate about crafting user-friendly web applications. I specialize in front-end development, innovative designs, and creating seamless digital experiences.</p>
            <span>
                <h2>I am a </h2>
                <h3>{texts[index]} </h3>
            </span>
            <br />
            
            <a className='viewMore'>View more</a>
            <a className='btn'>Hire me</a>
            <div>
                <div className='media'><a href='https://github.com/Dinithi1625403'><i className='fab fa-github icon'></i></a></div>
                <div className='media'><a href='https://www.linkedin.com/in/dinithi-dewmini-30280327b/'><i className='fab fa-linkedin icon'></i></a></div>
                
            </div>
        </div>
    );
}
