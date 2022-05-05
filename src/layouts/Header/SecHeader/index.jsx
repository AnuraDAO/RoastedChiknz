import { NavLink } from "react-router-dom";
import IcoName from '../../../data/data-layout/Footer/data-IcoName.json';
import initEthers from "../../../components/Crypto/wallet";

function testFunc (){
  console.log('Test');
}

const SecHeader = ({Logo , dropdownItem , MenuInfo, IcoName}) => {

  return (
      <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#"><span><img draggable="false" src={Logo} alt="logo" /> Anura</span></a>
          <div className="stripe1"></div>
          <div className="stripe2"></div>
          {/* Toggler/collapsibe Button */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

              {MenuInfo && MenuInfo.map((item , key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>{item.nameLink}</a>
                </li>
              ))}

              {<li className="lh-55px"><button id="wallet" className="btn login-btn ml-50"  onClick={async () => { 

        //CHUNK Of CODE for Wallet--------------------------     
                async function getAccount() {
                  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                  //PROD
                await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0xa86a' }], });
                  const account = accounts[0];
                  console.log("Found Accounts",accounts);
                  return account
              } 
          //CHUNK OF CODE for logo
              async function addLogo(){
                console.log('Logo Add');
                const tokenAddress = '0x302Abf007C2045F1bC0867a4b7abaaE2152e0EB3';
                const tokenSymbol = 'RIBT';
                const tokenDecimals = 18;
                const tokenImage = 'https://gateway.pinata.cloud/ipfs/QmcaTtz3w1FXnyyvs6VmfHABdPDELKA4kDiRaDRhRozJCv';
                
                try {
                  const wasAdded = await window.ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                      type: 'ERC20', 
                      options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals, // The number of decimals in the token
                        image: tokenImage, // A string url of the token logo
                      },
                    },
                  });
                  if (wasAdded) {
                    console.log('Thanks for your interest!');
                  } else {
                    console.log('Your loss!');
                  }
                } catch (error) {
                  console.log(error);
                }
                }


                if(window.ethereum){
                window.ethereum.on('accountsChanged', async ()=>{
                  console.log("Acc Change Detected");
                  await addLogo();
                });

                window.ethereum.enable(); //Enable ethereum
                await getAccount();
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                if(accounts.length >0){
                await addLogo();
                }
                
              }
            }}>Connect Wallet</button></li>}
            <div className="marketplace">COMING SOON</div>
              <div className="header-social-info fadeInUp" data-wow-delay="0.4s">
                      {IcoName && IcoName.map((item , key) => (
                          <a key={key} href={item.linksrc}><i className={item.IcoName} aria-hidden="true" /></a>
                              
                      ))}
              </div>
            </ul>
          </div>
        </div>
  
      </nav>
      
    );
}

export default SecHeader;