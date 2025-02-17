import './achivements.css';

export default function Achivements(){
    const AchivementsData = [
        {title:"Semifinalist of hack X 9.0 2024",description:"HackX is a Ideathon organized by Faculty of Science,University of Kaleniya.",image:"https://i.ibb.co/7zvJYJ1/hack-X-9-0.png"},
        {title:"Finalist of InspiHER",description:"InspiHER is a Hackathon organized by IEEE WIE AG IEEE SL Section.",image:"https://i.ibb.co/7zvJYJ1/hack-X-9-0.png"},
    ];
    return(
        <>
            <div className="achivement-container">
                {AchivementsData.map((item, index) => (
                    <div key={index} className="achivement-card">
                        <p className="achivement-title">{item.title}</p>
                        <p className="achivement-description">{item.description}</p>
                        <img src={item.image} alt={item.title} className="achivement-image" />
                    </div>
                ))}
            </div>
        </>
    )
}