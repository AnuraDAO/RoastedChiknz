const SauceItem = ({ Round }) => {

    return (
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="sauce-item ">
          <h4>{Round}</h4>
          <h3>calories: 4700-3000</h3>
        </div>
      </div>
    );
}

export default SauceItem;