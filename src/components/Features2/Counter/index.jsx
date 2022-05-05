import { SlideCountdown } from 'react-fancy-countdown';
import { Line } from 'rc-progress';

const Counter = ({icoCounterClass}) => {
    return (
     
        <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <div className={icoCounterClass}>
            <div className="counter-down">
              <div className="content">
                <div className="conuter-header">
                  <h3 className="w-text text-center">$RIBT PRESALE ENDS</h3>
                </div>
                <div className="counterdown-content">
                  <div className="count-down titled circled text-center" >
                    <SlideCountdown
                      weeks={false}
                      deadline="2022-04-29 17:00:00" />
                  </div>
                  <div className="ico-progress">
                    <ul className="list-unstyled list-inline clearfix mb-10">
                      <li className="title"></li>
                      <li className="strength">60m</li>
                    </ul>
                    <div className="current-progress">
                      <Line percent="25" trailWidth="3" strokeWidth="4" strokeColor="#fb881d" />
                    </div>
                    <span className="pull-left">. . .</span>
                    <span className="pull-right">Total Presale Allocation</span>
                  </div>
                  <div className="text-center">
                    <a className="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="https://traderjoexyz.com/trade?outputCurrency=0x302Abf007C2045F1bC0867a4b7abaaE2152e0EB3#/" target="_blank" rel="noreferrer noopener">Buy $RIBT</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Counter