import {RCWebJoinBottom} from "../../../utils/allImgs"
import SectionHeading from "../../../components/SectionHeading"
import Join from "./Join"

const OurJoinUs = ({OurJoinUsFirst , OurJoinUsSecond}) => {
  return (

    <section className="join-us section-padding-0-100 clearfix" id="services">
      <div className="container">
        <SectionHeading
          title=""
          text="Development Process"
          ptext="Anura has a transparent development process and anyone can build their ideas here. Every community member has the ability to obtain an equal share of governance and vote on official proposals to grow our ecosystem."
        />
        <div className="row dark-row pt-60">
          {OurJoinUsFirst && OurJoinUsFirst.map((item , key) => (
            <Join
              key={key}
              ClassTop={item.ClassTop}
              ClassDown={item.ClassDown}
              ClassSteps={item.ClassSteps}
              Steps={item.Steps}
              title={item.title}
              ptext={item.ptext}
            />
          ))}
          <div className="col-lg-4 hidden-md hidden-sm hidden-xs text-center">
            <img draggable="false" src={RCWebJoinBottom} className="arrow-img rotated" alt="" />
          </div>
          <div className="col-lg-4 text-center hidden-md hidden-sm hidden-xs">
            <div className="dream-dots justify-content-center fadeInUp" data-aos="fade-up" data-aos-delay="200">
              <span>Be a Part of the Magic</span>
            </div>
            <h2 className="fadeInUp" data-aos="fade-up" data-aos-delay="300">Contribution Cycle</h2>
          </div>
          <div className="col-lg-4 hidden-md hidden-sm hidden-xs text-center">
            <img draggable="false" src={RCWebJoinBottom} className="arrow-img" alt="" />
          </div>
          {OurJoinUsSecond && OurJoinUsSecond.map((item , key) => (
            <Join
              key={key}
              ClassTop={item.ClassTop}
              ClassDown={item.ClassDown}
              ClassSteps={item.ClassSteps}
              Steps={item.Steps}
              title={item.title}
              ptext={item.ptext}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurJoinUs;