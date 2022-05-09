var walletButton = document.getElementById('wallet');

walletButton.addEventListener('click', async () => {
    window.ethereum.enable(); //Connect wallet pop up
    checkIfMetamaskConnected();
    getAccount();
    });

async function getAccount() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
       await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0xa86a' }], }); //Fuji Testnet 0xa869 //Mainnet 0xa86a
        const account = accounts[0];
        console.log("Found Accounts",accounts);
        walletButton.textContent = "Connected 🔌";
        return account
    }

async function getBalance() {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const address = ethereum.selectedAddress;
    
        let currentBal = await provider.getBalance(address);
        const balanceInAvax = ethers.utils.formatEther(currentBal); 
        
      
    return balanceInAvax;
}
    


checkIfMetamaskConnected = function(){
    if(window.ethereum.isConnected()==true){
        walletButton.textContent = "Connecting";  
        changeLogic();
        getAccount();
    }

}

getAccount();

function changeLogic(){

      
      ethereum.on('chainChanged', (chainId) => {
        // Handle the new chain.
        // Correctly handling chain changes can be complicated.
        // We recommend reloading the page unless you have good reason not to.
        window.location.reload();
      });
      

}