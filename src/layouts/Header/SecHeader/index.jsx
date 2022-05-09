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

        //CHUNK Of CODE for When wallet button clicked

        
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