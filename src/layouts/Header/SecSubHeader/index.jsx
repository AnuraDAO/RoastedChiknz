const SecSubHeader = ({
    ClassSec="",
    ClassDiv,
    title="",
    img="",

  }) => {

return (
  <section className={ClassSec} id="subheader">
      <div className="sub-header-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="sh-text">{img}{title}
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>

);
}

export default SecSubHeader;