const SecAbout = ({imgDwon=false , title , text , img}) => {

  return (
    <>
      {imgDwon ? (
          <section className="about-us-area section-padding-100 clearfix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 offset-lg-0">
                  <div className="who-we-contant mt-s">

                    <h4 data-aos="fade-up" data-aos-delay="300">{text}</h4>
                    <a className="btn more-btn mt-30" href="#">Read More</a>
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                  <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <img draggable="false" src={img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (

          <section className="about-us-area section-padding-100 clearfix" id="about">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                  <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <img draggable="false" src={img} alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0">
                  <div className="who-we-contant mt-s">
                    <a className="btn more-btn mt-30" href="https://anuradao.medium.com/" target="_blank" rel="noreferrer noopener">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        )}
    </>
  );
}

export default SecAbout;