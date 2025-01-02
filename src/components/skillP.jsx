import Skills from "./skills";
import "./skills.css";
function SkillsP() {
   
    return (
       <>
       <div>
           
        <div className="skills">
        <h1 className="sTitle">Skills</h1>
        <div className="skills-container">
            <div className="skillName">
           <Skills skill="HTML" card="HyperText Markup Language" icon="https://img.icons8.com/color/48/000000/html-5.png" />
           <Skills skill="CSS" card="Cascading Style Sheets" icon="https://img.icons8.com/color/48/000000/css3.png" />
           <Skills skill="JavaScript" card="JavaScript" icon="https://img.icons8.com/color/48/000000/javascript.png" />
              <Skills skill="React" card="React" icon="https://img.icons8.com/color/48/000000/react-native.png" />
                <Skills skill="Python" card="Python" icon="https://img.icons8.com/color/48/000000/python.png" />
                <Skills skill="SQL" card="Structured Query Language" icon="https://img.icons8.com/color/48/000000/sql.png" />
                <Skills skill="PHP" card="PHP" icon="https://img.icons8.com/color/48/000000/php.png" />
                <Skills skill="C" card="C Programming Language" icon="https://img.icons8.com/color/48/000000/c-programming.png" />
                <Skills skill="C++" card="C++ Programming Language" icon="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />
                <Skills skill="Figma" card="Figma" icon="https://img.icons8.com/color/48/000000/figma.png" />
        </div>
                
            </div>
        </div>
    </div>
       </>
    );

}
export default SkillsP;