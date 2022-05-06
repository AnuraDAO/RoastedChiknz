const RedHero = ({
    redHeader="",
    subtitle1="",
    subtitle2="",
    redInfoText="",
    link1=""

}) => {
    return (

        <div className="red-sec">
            <h2>{redHeader}</h2>
            <h1>{subtitle1}<br/>{subtitle2}</h1>
            <h3>{redInfoText}</h3>
        
        <div className="red-sec stripe1"/>
        <div className="red-sec stripe2"/>
        <div className="red-sec logo"/>
        <div className="red-sec button">
            <a href="https://anuradao.medium.com/anura-presents-the-roast-of-2a27c95b1f62" target="_blank" rel="noreferrer noopener">{link1}</a>
        </div>
        
        <div className="chicken-bath"/>
        <div className="footer-stripe1"/>
        <div className="footer-stripe2"/>
        <div className="footer-chicken"/>

        </div>

    );
}

export default RedHero;