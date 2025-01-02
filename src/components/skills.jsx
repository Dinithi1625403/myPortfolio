import "./skills.css";
function SkillsP(props) {
return (
    
                    <li>
                        {props.skill}
                        <div className="card">
                            
                            <img src={props.icon} alt={`${props.skill} icon`} />
                        </div>
                    </li>
                
         
);
}
export default SkillsP;