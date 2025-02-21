import "./about.css";
import { useEffect } from "react";
import Education from "./about/education";
import Achievements from "./about/achievements";

function About() {
useEffect(() => {
  const handleScroll = () => {
    var aboutSection = document.querySelector('.container');
    var position = aboutSection.getBoundingClientRect();

    // Checking if the element is in the viewport
    if (position.top < window.innerHeight && position.bottom >= 0) {
      aboutSection.style.animation = 'fadeIn 2s ease-out forwards';
    
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  function aboutSection(event,tabName) {
    var i, tabContent, tab;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }
  return (
    <div id="about" className="container">
      <h1>About me✏️</h1>
      <div className="about">
        <p className="description">
          &nbsp;&nbsp;&nbsp;&nbsp;I’m a web developer who loves creating simple, user-friendly websites and applications. I’m currently studying for a BSc (Hons) in IT and always enjoy learning new skills, like React, to improve my work. I have a diploma in English Language and Literature, which helps me communicate and share ideas effectively. When I’m not coding, I spend time with my family and enjoy exploring new ways to grow and learn. I’m always excited to take on new challenges and create something meaningful. Let’s connect and make something great together!
        </p>
      </div>
      <div className="sub-container">
      <div className="aboutTab">
        <a className="tab"id="edu"  onClick={(e) => aboutSection(e, 'education')}>Education</a>
        <a className="tab" id="achive" onClick={(e) => aboutSection(e, 'achivements')}>achivements</a>
      </div>
      <hr></hr>
      <div id="education" className="tabContent">
        
        <Achievements />
      </div>
      <div id="achivements" className="tabContent">
        
        <Education />
      </div>
      </div>
    </div>
  );
  

}
export default About;