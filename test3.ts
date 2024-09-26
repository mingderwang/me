import { ethers } from "ethers";

const callObject = {
    to: "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
    abi: [
        {
            "inputs": [{ "internalType": "string", "name": "greeting", "type": "string" }],
            "name": "setGreeting",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    functionName: "setGreeting",
    args: ["Hello, World!"]
};



// Create an instance of the contract interface
const iface = new ethers.utils.Interface(callObject.abi);

// Encode the function call with arguments
const data = iface.encodeFunctionData(callObject.functionName, callObject.args);

// Extract the `to` address
const to = callObject.to;

// Define the `value` (set to 0 for non-payable function calls)
const value = ethers.BigNumber.from(0);

const result = { to, data, value: value.toHexString() };

// Fill in the `userOp` structure
const userOp = {
    sender: "0xYourSmartContractWalletAddress", // The address of your smart contract wallet
    nonce: 0, // Replace with the actual nonce
    initCode: "0x", // If deploying the wallet, this contains the creation code. Otherwise, keep "0x"
    callData: data,
    callGasLimit: ethers.BigNumber.from(21000).toHexString(), // Adjust gas as needed
    verificationGasLimit: ethers.BigNumber.from(100000).toHexString(), // Gas limit for verification
    preVerificationGas: ethers.BigNumber.from(21000).toHexString(), // Pre-verification overhead
    maxFeePerGas: ethers.BigNumber.from("20000000000").toHexString(), // Adjust based on network conditions
    maxPriorityFeePerGas: ethers.BigNumber.from("1500000000").toHexString(), // Adjust based on network conditions
    paymasterAndData: "0x", // Data for the paymaster, if any; otherwise, keep "0x"
    signature: "0x" // The signature to be added later
};

console.log(callObject)
console.log(result);
console.log(`------------------------`)
console.log(userOp);
