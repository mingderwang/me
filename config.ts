import { http, createPublicClient } from 'viem'
import { 
  createBundlerClient, 
  createPaymasterClient,
  toCoinbaseSmartAccount,
} from 'viem/account-abstraction'
import { sepolia } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'

const client = createPublicClient({
  chain: sepolia,
  transport: http()
})

export const account = await toCoinbaseSmartAccount({
  client,
  owners: [privateKeyToAccount(process.env.PRIVATE_KEY)],
})
 
const paymasterClient = createPaymasterClient({ 
  transport: http(process.env.PAYMASTER_RPC), 
}) 
 
export const bundlerClient = createBundlerClient({
  chain: sepolia,
  paymaster: paymasterClient, 
  transport: http('https://public.pimlico.io/v2/11155111/rpc'),
})
