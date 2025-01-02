import React, { useState, useEffect } from 'react';
import './intro.css';
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
        <div className="intro" style={{ textAlign: 'left' }}>
            <h1>Hi! It's Dinithi Dewmini</h1>
            <p>An IT undergraduate passionate about crafting user-friendly web applications. I specialize in front-end development, innovative designs, and creating seamless digital experiences.</p>
            <span>
                <h2>I am a  </h2>
                <h3>{texts[index]}</h3>
            </span>
            <br />
            <button>Hire me</button>
        </div>
    );
}
