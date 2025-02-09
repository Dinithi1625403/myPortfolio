import "./skills.css";
import { useEffect } from "react";
function SkillsP(props) {
  useEffect(() => {
    const handleScroll = () => {
      var aboutSection = document.querySelector('.skills');
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
return (
    
                    <li>
                       
                        <div className="card">
                           <h4 className="skillTitle"> {props.skill}</h4>
                           
                          <img className="skillIcon" src={props.icon} alt={`${props.skill} icon`} />
                        </div>
                    </li>
                
         
);
}


function Skills() {
   
    return (
       <>
       <div id="skills">
       
      <div className="skills">
      <h1 className="sTitle">Skills 🏆</h1>
      <div className="skills-container">
      <div className="skillName">
       <SkillsP skill="HTML" card="HyperText Markup Language" icon="https://img.icons8.com/color/48/000000/html-5.png" />
       <SkillsP skill="CSS" card="Cascading Style Sheets" icon="https://img.icons8.com/color/48/000000/css3.png" />
       <SkillsP skill="JavaScript" card="JavaScript" icon="https://img.icons8.com/color/48/000000/javascript.png" />
      <SkillsP skill="React" card="React" icon="https://img.icons8.com/color/48/000000/react-native.png" />
      <SkillsP skill="Python" card="Python" icon="https://img.icons8.com/color/48/000000/python.png" />
      <SkillsP skill="SQL" card="Structured Query Language" icon="https://img.icons8.com/color/48/000000/sql.png" />
      <SkillsP skill="PHP" card="PHP" icon="https://img.icons8.com/color/48/000000/php.png" />
      
      <SkillsP skill="C" card="C Programming Language" icon="https://img.icons8.com/color/48/000000/c-programming.png" />
      <SkillsP skill="C++" card="C++ Programming Language" icon="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />
      <SkillsP skill="Figma" card="Figma" icon="https://img.icons8.com/color/48/000000/figma.png" />
      <SkillsP skill="Bootstrap" card="Bootstrap" icon="https://img.icons8.com/color/48/000000/bootstrap.png" />
      <SkillsP skill="Canva" card="Canva" icon="https://img.icons8.com/color/48/000000/canva.png" />
      <SkillsP skill="Photoshop" card="Adobe Photoshop" icon="https://img.icons8.com/color/48/000000/adobe-photoshop.png" />
      <SkillsP skill="Jira" card="Jira" icon="https://img.icons8.com/color/48/000000/jira.png" />
      </div>
      
      </div>
      </div>
    </div>
       </>
    );

}
export default Skills;
