import { parseGwei } from 'viem'
import { account, bundlerClient } from './config'
 
const hash = await bundlerClient.sendUserOperation({ 
  account,
  calls: [{
    to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    value: parseGwei('1')
  }],
  maxFeePerGas: 251334054321n,
  maxPriorityFeePerGas: 2000000000n,
})

console.log(hash)
