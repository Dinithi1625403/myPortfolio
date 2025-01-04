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
export default SkillsP;