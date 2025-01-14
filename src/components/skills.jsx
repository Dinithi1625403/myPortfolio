import "./skills.css";
function SkillsP(props) {
return (
    
                    <li>
                       
                        <div className="card">
                           <h4> {props.skill}</h4>
                           
                          <img src={props.icon} alt={`${props.skill} icon`} />
                        </div>
                    </li>
                
         
);
}


function Skills() {
   
    return (
       <>
       <div>
       
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
