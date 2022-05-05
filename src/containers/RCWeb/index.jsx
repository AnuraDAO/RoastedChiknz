import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'
import {
        Services,
        Features2InfoTop,
        Features2InfoDown,
        } from '../../data/data-containers/RCWeb/data-RCWeb.js';

import SecSauceItemsInfo from '../../data/data-containers/RCWeb/data-SecSauceItemsInfo.json';
import RoadmapInfo from '../../data/data-containers/RCWeb/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/RCWeb/data-FaqInfo.json';

import {
        RCWebPin,
        RCWebPlatform1,
        RCWebwhitepaper,
        RCWebAbout1,
        RCWebSalsa1,
        RCWebSalsa2,
        RCWebSalsa3,
        RCWebSalsaSM1,
        RCWebSalsaSM2,
        RCWebSalsaSM3,
        RCWebSalsaSM4
        } from '../../utils/allImgs'

import './style/RCWeb.scss'
import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'
import SecHeroSection from '../../components/HeroSection'

import SecSauceItems from '../../components/SecSauceItems'
import initEthers from "../../components/Crypto/wallet";
const RCWebContainer = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
 

      <div>
     
        
        <Header Title="Roasted Chicknz" />
        <SecHeroSection
          ClassSec="hero-section moving section-padding"
          ClassDiv="col-12 col-lg-5 col-md-12"
          title="Roasted Chiknz."
          link1="FREE"
          link2="ROAST"
          img={RCWebPlatform1}
        />
       
        <div className="sauce-section">
          <div className="welcome-meter1" data-aos="fade-up" data-aos-delay="200">
            <div className="salsa-degen"/>
          <div className="welcome-meter2" data-aos="fade-up" data-aos-delay="200">
            <div className="salsa-trader"/>
          <div className="welcome-meter3" data-aos="fade-up" data-aos-delay="200">
            <div className="salsa-verde"/>
            <div className="welcome-meter4" data-aos="fade-up" data-aos-delay="200">
            <div className="sauce-price"/>
          </div>
          </div>
          </div>
          </div>
          <div className="order-btn">Order Sauce</div>
          <div className="orderText"><text>Add flavor to{"\n"}your chiknz.</text></div>
        </div>
        
          <div className="featured-sauces"><text>Featured Sauces</text>
          <div className="section-break"/>
          </div>

          <div className="bd1"/>  
          <div className="bd1-img"/>
          <div className="bd2"/>
            <div className="bd2-img"/>
          <div className="bd3"/>
            <div className="bd3-img"/>
          <div className="bd4"/>
            <div className="bd4-img"/>
          <SecSauceItems data={SecSauceItemsInfo} />
          <div className="welcome-meter5" data-aos="fade-up" data-aos-delay="200">
            <div className="hiw">
              <h4>What is it?</h4>
              <h3><text className="hiw highlight-h3">roasted chiknz </text>are not just plain-old NFTs...
              <br/>They are an entire ecosystem built around<br/> these NFTs - 
                  encompassing a novel Tri-Token<br/> Architecture.</h3>
            </div>
          </div>
        <div className="red-chicken"/>
        
        <div className="red-sec">
          <h2>OUR FOOD</h2>
          <h1>A GAME<br/> 
              WITH A TWIST</h1>
          <h3>Get your chiknz sauced and juicy. It's finger lik'n good!</h3>
        <div className="red-sec stripe1"/>
        <div className="red-sec stripe2"/>
          <div className="red-sec logo"/>
          <div className="red-sec button">
            <a href="https://anuradao.medium.com/anura-presents-the-roast-of-2a27c95b1f62" target="_blank" rel="noreferrer noopener">Learn More</a>
          </div>
          <div className="chicken-bath"/>
        <div className="footer-stripe1"/>
        <div className="footer-stripe2"/>
          <div className="footer-chicken"/>
        </div>

        <div className="welcome-meter4" data-aos="fade-up" data-aos-delay="200">
            <div className="hiw2">
              <h4>How it works</h4>
              <h3>|| <text className="hiw2 highlight-h3">Roasted chiknz</text> produce YUM tokens.
              <br/>
              <br/>|| They can evolve.
              <br/>
              <br/>|| Holding a roasted chikn enters you into a weekly raffle.
              </h3>
            </div>
            <div className="footer-discord-btn">
              <a href="https://discord.gg/GJR3RjNfK3" target="_blank" rel="noreferrer noopener">Join our Discord!</a>
              </div>
          </div>

          <div className="pre-footer"/>

        <div className="clearfix" />
        <FooterPages />
        
      </div>
    );
};
initEthers();

export default RCWebContainer