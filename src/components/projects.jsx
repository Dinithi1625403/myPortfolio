import "./projects.css"
function  Projects(props){
    return(
        <>      
            <div className="project-card">
                <div className="project">
                    <img className="projectImg" src={props.image} alt={props.project} title={props.project} />
                </div>
                <div className="project-description">
                    <div className="project-info">
                        <h5>{props.project}</h5>
                        <h6>{props.time}</h6>    
                        <p>{props.description}</p>
                        <h6>Skills: {props.skill}</h6>
                        <div className="project-links">
                        <a className="view" href={props.link}>
                            <i className="fa-brands fa-github"  title="View project"></i> 
                        </a>
                        

                        <a className="demo" href={props.demo}>
                            <i className="fas fa-play-circle" title="Demo"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
function ProjectsP(){
    return(
        <div className="projects">
            <h1>Projects 🚀</h1>
            <div className="projects-container">
                <Projects
                    project="Age-calculator 🎂"
                    time="May 2024 - May 2024"
                    description="An intuitive age calculator using HTML, CSS, and JavaScript to determine exact age in years, months, and days."
                    skill="JavaScript · Cascading Style Sheets (CSS) · HTML"
                    image="https://github.com/Dinithi1625403/agecalculator/raw/main/images/Screenshot.png"
                    link="https://github.com/Dinithi1625403/agecalculator"
                    demo="https://dinithi1625403.github.io/agecalculator/"
                />
                <Projects
                    project="BMI-calculator 🏋️"
                    time="May 2024 - May 2024"
                    description="A simple BMI calculator built with HTML, CSS, and JavaScript to determine BMI based on height and weight."
                    skill="JavaScript · Cascading Style Sheets (CSS) · HTML"
                    image="https://github.com/Dinithi1625403/BMI-Calculator/raw/main/images/Screenshot.png"
                    link="https://github.com/Dinithi1625403/BMI-Calculator"
                    demo="https://dinithi1625403.github.io/BMI-Calculator/"
                />
                <Projects
                    project="Weather-app ☀️"
                    time="Jun 2024 - Jun 2024"
                    description="A weather app providing real-time weather updates, hourly forecasts, and a responsive design using HTML, CSS, Bootstrap, and JavaScript."
                    skill="JavaScript · Bootstrap (Framework) · Cascading Style Sheets (CSS) · HTML5"
                    image="https://github.com/Dinithi1625403/weather/raw/main/images/Screenshot.jpg"
                    link="https://github.com/Dinithi1625403/weather"
                    demo="https://dinithi1625403.github.io/weather/"
                />
                <Projects
                    project="To-do-list 📝"
                    time="Jun 2024 - Jul 2024"
                    description="A feature-rich To-Do List application using HTML, CSS, and JavaScript, allowing task categorization and a user-friendly interface."
                    skill="JavaScript · Bootstrap (Framework) · Cascading Style Sheets (CSS) · HTML"
                    image="https://github.com/Dinithi1625403/To-do-list/raw/main/images/welcome.png"
                    link="https://github.com/Dinithi1625403/To-do-list"
                    demo="https://dinithi1625403.github.io/To-do-list/"
                />
                <Projects
                    project="Image-Gallery 🖼️"
                    time="Dec 2024 - Dec 2024"
                    description="An interactive web application for viewing, organizing, and managing image collections with features like lightbox view and hover effects."
                    skill="HTML · Cascading Style Sheets (CSS) · JavaScript · Canva"
                    image="https://github.com/Dinithi1625403/imageGallery/raw/main/Screenshot.png"
                    link="https://github.com/Dinithi1625403/imageGallery"
                    demo="https://dinithi1625403.github.io/imageGallery/"
                />
            </div>
        </div>
    )
}
export default ProjectsP;
