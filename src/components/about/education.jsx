export default function Education(){
    const educationData = [
        { title: "Rathnawali Balika Vidyalaya Gampaha", duration: "2013-2018" },
        { title: "Rathnawali Balika Vidyalaya Gampaha", duration: "2018-2022" },
        { title: "Aqainas College of Higher Studies", duration: "2022-2023" },
        { title: "University of Moratuwa", duration: "2023-Present" }
    ];

    return (
        <>
            <div className="education-container">
                {educationData.map((item, index) => (
                    <div key={index} className="education-item">
                        <div className="education-point"></div>
                        <div className="vertical-line"></div>
                        <div className={`education-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <h2 className="education-title">{item.title}</h2>
                            <p className="education-duration">{item.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}