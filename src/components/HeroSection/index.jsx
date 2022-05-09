import { ethers } from "ethers";

const SecHeroSection = ({
      ClassSec="",
      ClassDiv="",
      specialHead="",
      title="",
      link1="",
      link2="",
      img="",
      AnuraWebOr3Or4Or5Or6=true,
      AnuraWebOr4Or5Or6=true,

    }) => {

      async function roastAChicken(){
        var roastChickenContractAddr = "0x0951232B828405CaEd03f68B27dd06DA67992D14";
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        var signer = provider.getSigner();
        //Mint the chicken
        var roastChickenABIMint = [{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{ "inputs": [], "name": "returnTokenId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function"}];
        var roastChickenContract = new ethers.Contract(roastChickenContractAddr,JSON.stringify(roastChickenABIMint),provider);
        var upcomingChikn = await roastChickenContract.returnTokenId();
        var signedContract = roastChickenContract.connect(signer);
        var roastChicken = await signedContract.safeMint(window.ethereum.selectedAddress,{value: 0});
        var finalChicken = await roastChicken.wait(1);
        upcomingChikn.toString();
        document.getElementById('chiknImage').src="https://roasted.mypinata.cloud/ipfs/QmbEaGUtDCUT69BhXx18hybgob8gQb8MjdgeQJqHn3x5jA/"+upcomingChikn.toString()+".png"
        document.getElementById('chiknImage').style.maxWidth = "23vw";
        document.getElementById('chiknImage').style.marginLeft = "250px";

      }

  return (

    <section className={ClassSec} id="home">
      <div className="sub-header">Start and Order Pickup or Delivery</div>
      <div className="sub-header-img"/>
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="welcome-content">
              <div className="descript">MINT HERE</div>
                <h5>{title}</h5>
                <p className="subtitle"><text className="highlight-text" color="#000000">500 </text>unique NFTs with a twist.</p>
                <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                  <a className="free mr-4">{link1}</a>
                  <button href="#" target="_blank" rel="noreferrer noopener" className="btn roast-btn" onClick={roastAChicken}>{link2}</button>
                </div>
              </div>
            </div>
            {AnuraWebOr3Or4Or5Or6 && (
              <div className="col-lg-6">
                {AnuraWebOr4Or5Or6 && (
                  <div className="illusto-2">
                    <img draggable="false" src={img} alt="" id="chiknImage" />
                  </div>
                  
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}

export default SecHeroSection;