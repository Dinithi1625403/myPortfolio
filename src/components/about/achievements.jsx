import './achievements.css';

export default function Achievements(){
    const AchievementsData = [
        {title:"Semifinalist of hack X 9.0 2024",description:"HackX is a Ideathon organized by Faculty of Science,University of Kaleniya.",image:"https://i.ibb.co/FqgWZ7ps/hackX.jpg"},
        {title:"Finalist of InspiHER",description:"InspiHER is a Hackathon organized by IEEE WIE AG IEEE SL Section.",image:"https://i.ibb.co/7zvJYJ1/hack-X-9-0.png"},
        
    ];
    return(
        <>
            <div className="achievement-container">
                {AchievementsData.map((item, index) => (
                    
                    <div key={index} className="achievement-card">
                        <p className="achievement-title">{item.title}</p>
                        <p className="achievement-description">{item.description}</p>
                        <img src={item.image} alt={item.title} className="achievement-image" />
                    </div>
                ))}
            </div>
        </>
    )
}