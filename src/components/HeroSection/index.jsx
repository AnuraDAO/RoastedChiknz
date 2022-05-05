const SecHeroSection = ({
      ClassSec="",
      ClassDiv="",
      specialHead="",
      title="",
      link1="",
      link2="",
      img="",
      AnuraWebOr3Or4Or5Or6=true,
      AnuraWebOr4Or5Or6=true,

    }) => {

  return (

    <section className={ClassSec} id="home">
      <div className="sub-header">Start and Order Pickup or Delivery</div>
      <div className="sub-header-img"/>
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="welcome-content">
              <div className="descript">MINT HERE</div>
                <h5>{title}</h5>
                <p className="subtitle"><text className="highlight-text" color="#000000">500 </text>unique NFTs with a twist.</p>
                <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                  <a className="free mr-4">{link1}</a>
                  <a href="#" target="_blank" rel="noreferrer noopener" className="btn roast-btn">{link2}</a>
                </div>
              </div>
            </div>
            {AnuraWebOr3Or4Or5Or6 && (
              <div className="col-lg-6">
                {AnuraWebOr4Or5Or6 && (
                  <div className="illusto-2">
                    <img draggable="false" src={img} alt="" />
                  </div>
                  
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}

export default SecHeroSection;