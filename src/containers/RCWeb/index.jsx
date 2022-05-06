import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'
import SecSauceItemsInfo from '../../data/data-containers/RCWeb/data-SecSauceItemsInfo.json';
import { RCWebPlatform1 } from '../../utils/allImgs'
import './style/RCWeb.scss'
import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'
import SecHeroSection from '../../components/HeroSection'
import SecSauceItems from '../../components/SecSauceItems'
import initEthers from "../../components/Crypto/wallet";
import OrderSauce from "../../components/OrderSauce";
import FeaturedSauces from "../../components/FeaturedSauces";
import InfoSection from "../../components/SecInformation";
import RedHero from "../../components/SecRedHero";
import PreFooter from "../../components/SecPreFooter";

const RCWebContainer = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (

      <div>
        <Header Title="Roasted Chiknz" />
        <SecHeroSection
          ClassSec="hero-section moving section-padding"
          ClassDiv="col-12 col-lg-5 col-md-12"
          title="Roasted Chiknz."
          link1="FREE"
          link2="ROAST"
          img={RCWebPlatform1}

        />
        <OrderSauce
          btntext="Order Sauce"
          descript= "Add flavor to your chiknz."

        />
        <FeaturedSauces
          featHeader="Featured Sauces"
          
        />
        <SecSauceItems data={SecSauceItemsInfo} />
        <InfoSection 
          infoHeader="What is it?"
          highlight="Roasted Chiknz "
          infoText1="are not just plain-old NFTs..."
          infoText2="They are an entire ecosystem built around"
          infoText3=" these NFTs - encompassing a novel Tri-Token"
          infoText4=" Architecture."
        
        />
        <RedHero
        redHeader="OUR FOOD"
        subtitle1="A GAME"
        subtitle2=" WITH A TWIST"
        redInfoText="Get your chiknz sauced and juicy. It's finger lik'n good!"
        link1="Learn More"

        />
        <PreFooter
          pfheader="How it works"
          highlight="Roasted Chiknz"
          text1=" produce YUM tokens."
          text2="|| They can evolve."
          text3="|| Holding"
          highlight2=" Roasted Chiknz "
          text4="enters you into a weekly raffle."
          link1="Join our Discord!"

        />
        <FooterPages />
        
      </div>
    );
};
initEthers();

export default RCWebContainer