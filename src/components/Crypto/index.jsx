import {ethers} from 'ethers'

const ribtCrowdsaleABI = [ { "inputs": [ { "internalType": "address", "name": "beneficiary", "type": "address" } ], "name": "buyTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_init", "type": "bool" } ], "name": "initPresale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "rate", "type": "uint256" }, { "internalType": "address payable", "name": "wallet", "type": "address" }, { "internalType": "contract IERC20", "name": "token", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "purchaser", "type": "address" }, { "indexed": true, "internalType": "address", "name": "beneficiary", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "TokensPurchased", "type": "event" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [ { "internalType": "uint256", "name": "rate_", "type": "uint256" } ], "name": "updateRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "_rate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [ { "internalType": "contract IERC20", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "wallet", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "weiRaised", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]
const ribtCrowdsaleAddress = "0xC9c9328FCcc977379C7c810A657C2f9F3B76C67F"
const provider = new ethers.providers.Web3Provider(window.ethereum)

async function getValues() {
await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const ribtCrowdsaleContract = new ethers.Contract(ribtCrowdsaleAddress, ribtCrowdsaleABI, provider);

    const signedContract = ribtCrowdsaleContract.connect(signer);
    let values = await signedContract.weiRaised()

    values=values/(10**18);
    values=values/2666;
    values=values*100;
    console.log(values)  

    return values
}

export default getValues