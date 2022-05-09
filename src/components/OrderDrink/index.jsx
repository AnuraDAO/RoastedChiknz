const OrderSauce = ({
    btntext="",
    descript=""

}) => {
    return (
    
    <div className="sauce-section">
        <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
        <div className="salsa-degen"/>
            <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
            <div className="salsa-trader"/>
                <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                <div className="salsa-verde"/>
                    <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <div className="sauce-price"/>
                </div>
            </div>
        </div>
    </div>
    
        <div className="order-btn">{btntext}</div>
        <div className="orderText">{descript}</div>
    </div>
    );
}

export default OrderSauce;