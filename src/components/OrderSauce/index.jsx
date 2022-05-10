import { ethers } from "ethers";

/* global BigInt */
const OrderSauce = ({
    btntext="",
    descript=""

}) => {



    async function purchaseSauce(){

        
        function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
        }

        console.log('Buying Sauce');
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        var saucesContractAddr = "0x952Db3f9E2871646c71C3dA11b12A8937390340f";
        await provider.send("eth_requestAccounts", []);
        var signer = provider.getSigner();
        var ribtContractAddr = "0x302Abf007C2045F1bC0867a4b7abaaE2152e0EB3";
        var ribtABI = [{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
        var contract = new ethers.Contract(ribtContractAddr, JSON.stringify(ribtABI), provider);
        var allowance = await contract.allowance(window.ethereum.selectedAddress,saucesContractAddr);
        console.log("allowance is " + allowance.toString());
        if(allowance.toString() == "0"){     
            //Approve the spend  
            var signedContract = contract.connect(signer);
            var transactionReceipt = await signedContract.approve(saucesContractAddr, BigInt(50000*10**18));
            await transactionReceipt.wait(1);
        }
        var saucesABI = [{"inputs":[],"name":"numOfBuilder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numOfDegen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numOfHodler","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numOfTrader","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"payment","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        var sauceContract = new ethers.Contract(saucesContractAddr,JSON.stringify(saucesABI),provider);
        var builder = await sauceContract.numOfBuilder();;
        var hodler = await sauceContract.numOfHodler();
        var degen = await sauceContract.numOfDegen();
        var trader = await sauceContract.numOfTrader();
        builder = parseInt(builder.toString());
        hodler = parseInt(hodler.toString());
        degen = parseInt(degen.toString());
        trader = parseInt(trader.toString());
        var pendBuilder = 250-builder;
        var pendHodler = 250-hodler;
        var pendDegen = 250-degen;
        var pendTrader = 250-degen; 
        var checkerArray = ['',pendDegen,pendBuilder,pendTrader,pendHodler]
        do{
            var id = randomIntFromInterval(1,4);
         }while( checkerArray[id]==0)
        var signedSauceContract = sauceContract.connect(signer);
        var amt = 1;
        var data = window.ethereum.selectedAddress
        var payment = BigInt(690*10**18)
        console.log("Firing a mint with : "+ window.ethereum.selectedAddress + ' : '+ id + ' : ' + amt + " : " + data + ' : '+ payment);
        var sauceMint = await signedSauceContract.mint(window.ethereum.selectedAddress,id,amt,data,payment,{value: 0});
        await sauceMint.wait(1);
        document.getElementById('greenSauce').style.display = 'NONE';
        document.getElementById('traderSauce').style.display = 'NONE';
        if(id == 1){
            document.getElementById('redSauce').style.backgroundImage = 'url(/salsa-degen.png)'
        }
        if(id == 2){
            document.getElementById('redSauce').style.backgroundImage = 'url(/salsa-verde.png)'
        }
        if(id == 3){
            document.getElementById('redSauce').style.backgroundImage = 'url(/salsa-trader.png)'
        }
        if(id == 4){
            document.getElementById('redSauce').style.backgroundImage = 'url(/salsa-hodler.png)'
        }
    }
    return (
    
    <div className="sauce-section">
        <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
        <div className="salsa-degen" id="redSauce"/>
            <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
            <div className="salsa-trader" id="traderSauce" />
                <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                <div className="salsa-verde" id="greenSauce"/>
                    <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <div className="sauce-price"/>
                </div>
            </div>
        </div>
    </div>
    
        <button className="order-btn" href="#" target="_blank" rel="noreferrer noopener" onClick={purchaseSauce}>{btntext}</button>
        <div className="orderText">{descript}</div>
    </div>
    );
}

export default OrderSauce;