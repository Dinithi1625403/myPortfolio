import "./projects.css"
function  Projects(props){
    return(
        <>      <div className="project-card">
                <div className="project" >
                    
                    <img className="projectImg"  src={props.image} alt={props.project} />

                </div>
                <div className="project-description">
                <h5>{props.project}</h5>
                <h6>{props.time}</h6>    
                <p>{props.description}</p>
                <h6>Skills: {props.skill}</h6>
                <a className="view" href={props.link}>View project: {props.link}</a>
                <br/>
                <a className="demo" href={props.demo}>Demo: {props.demo}</a>

                </div>
                </div>
                </>
               
        
    
    )

}
function ProjectsP(){
    return(
        <div>
            <h1>Projects</h1>
            <div className="projects-container">
                <Projects
                    project="Age-calculator"
                    time="May 2024 - May 2024"
                    description="Developed an intuitive age calculator using HTML, CSS, and JavaScript. This tool allows users to quickly determine their exact age in years, months, and days by simply inputting their date of birth. The project demonstrates proficiency in front-end web development."
                    skill="JavaScript · Cascading Style Sheets (CSS) · HTML"
                    image="https://github.com/Dinithi1625403/agecalculator/raw/main/images/Screenshot.png"
                    link="https://github.com/Dinithi1625403/agecalculator"
                    demo="https://dinithi1625403.github.io/agecalculator/"
                />
                <Projects
                    project="BMI-calculator"
                    time="May 2024 - May 2024"
                    description="A simple and intuitive BMI (Body Mass Index) calculator built with HTML, CSS, and JavaScript. This tool helps users quickly determine their BMI based on height and weight inputs, providing insights into their health status. Perfect for anyone looking to monitor their fitness and well-being."
                    skill="JavaScript · Cascading Style Sheets (CSS) · HTML"
                    image="https://media.licdn.com/dms/image/v2/D562DAQH3Tn-kk7ElhA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1718163597078?e=1736690400&v=beta&t=iGDAV9h_hEXUnE2aSzjweX2x9tBFkyscWxcett2iNic"
                    link="https://github.com/Dinithi1625403/BMI-Calculator"
                    demo="https://dinithi1625403.github.io/BMI-Calculator/"
                />
                <Projects
                    project="Weather-app"
                    time="Jun 2024 - Jun 2024"
                    description="The Weather Forecast App is designed to provide accurate and real-time weather information. Built using HTML, CSS, Bootstrap, and JavaScript, this app offers a user-friendly interface and reliable data to help users plan their day effectively. Key Features: Current Weather: Get real-time weather updates for your location. Hourly Forecast: Detailed hourly weather forecasts to help you plan your activities. Responsive Design: Seamless experience on any device, thanks to Bootstrap's responsive framework. Interactive Elements: Dynamic weather icons and interactive elements for a more immersive user experience."
                    skill="JavaScript · Bootstrap (Framework) · Cascading Style Sheets (CSS) · HTML5"
                    image="https://github.com/Dinithi1625403/weather/raw/main/images/Screenshot.jpg"
                    link="https://github.com/Dinithi1625403/weather"
                    demo="https://dinithi1625403.github.io/weather/"
                />
                <Projects
                    project="To-do-list"
                    time="Jun 2024 - Jul 2024"
                    description="Developed a feature-rich To-Do List application using HTML, CSS, and JavaScript. The application allows users to categorize tasks into four distinct categories: important and urgent, not important but urgent, important but not urgent, and not important and not urgent. Each task is displayed in the appropriate category based on the user's selection via radio buttons. Designed with a user-friendly interface, including a cute and engaging font style to enhance user experience. Key Features: Categorization of tasks for better organization and prioritization. User-friendly interface with a visually appealing design. Efficient use of HTML, CSS, Bootstrap, and JavaScript to create a responsive application."
                    skill="JavaScript · Bootstrap (Framework) · Cascading Style Sheets (CSS) · HTML"
                    image="https://github.com/Dinithi1625403/To-do-list/raw/main/images/welcome.png"
                    link="https://github.com/Dinithi1625403/To-do-list"
                    demo="https://dinithi1625403.github.io/To-do-list/"
                />
                <Projects
                    project="Image-Gallery"
                    time="Dec 2024 - Dec 2024"
                    description="Developed an interactive web application that allows users to seamlessly view, organize, and manage their image collections. Key features of the gallery include: Lightbox View: Enables users to view images in a pop-up overlay without leaving the page. Hover Effects: Adds dynamic animations and visual effects for an enhanced user experience. Captions/Descriptions: Displays contextual captions below each image for additional information. Grid Layout: A clean and organized grid format for effortless browsing. Technologies Used: HTML, CSS, JavaScript for front-end development. Canva for designing and optimizing images. This project was created to provide users with an intuitive, visually appealing, and efficient tool for managing image collections."
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