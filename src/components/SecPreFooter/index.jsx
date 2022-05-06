const PreFooter = ({
    pfheader="",
    highlight="",
    text1="",
    text2="",
    text3="",
    highlight2="",
    text4="",
    link1=""

}) => {
    return (

    <div className="PF"> 
        <div className="welcome-meter4" data-aos="fade-up" data-aos-delay="200">
            <div className="hiw2">
                <h4>{pfheader}</h4>
                    <h3>|| <text className="hiw2 highlight-h3">{highlight}</text>{text1}
                    <br/>
                    <br/>{text2}
                    <br/>
                    <br/>{text3}<text className="hiw2 highlight-h3">{highlight2}</text>{text4}
                    </h3>
            </div>

            <div className="footer-discord-btn">
                <a href="https://discord.gg/GJR3RjNfK3" target="_blank" rel="noreferrer noopener">{link1}</a>
            </div>
        </div>

        <div className="pre-footer"/>
    </div>


    );
}

export default PreFooter;