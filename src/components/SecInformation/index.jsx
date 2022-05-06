const InfoSection = ({
    infoHeader="",
    highlight="",
    infoText1="",
    infoText2="",
    infoText3="",
    infoText4=""

}) => {
    return (

        <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
            <div className="hiw">
                <h4>{infoHeader}</h4>
                <h3><text className="hiw highlight-h3">{highlight}</text>{infoText1}
                <br/>{infoText2}<br/>{infoText3}<br/>{infoText4}</h3>
            </div>
            <div className="red-chicken"/>
            </div>

    );
}

export default InfoSection;