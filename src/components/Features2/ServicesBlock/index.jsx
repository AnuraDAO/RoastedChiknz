const ServicesBlock = ({img , title, ptext}) => {

    return (

        <div className="services-block-four v2">
          <div className="inner-box">
            <div className="icon-img-box">
              <img draggable="false" src={img} alt="" />
            </div>
            <h3><a href="#">{title}</a></h3>
            <div className="text">{ptext}</div>
          </div>
        </div>
    );

}

export default ServicesBlock