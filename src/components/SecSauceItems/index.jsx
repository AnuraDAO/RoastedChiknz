import SauceItem from "./SauceItem"

const SecSauceItems = ({ClassSec="features section-padding-0-70" , data}) => {

    return (

      <section className={ClassSec}>
        <div className="container">   
          <div className="row align-items-center">
            {data && data.map((item , key) => (
              <SauceItem
                key={key}
                Round={item.Round}
              />
            ))}
          </div>
        </div>
      </section>
    );
}

export default SecSauceItems;