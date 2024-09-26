import { accountFromPrivateKey } from 'viem/utils';
const privateKey = randomBytes(32).toString('hex'); // Random 32-byte private key
const account = accountFromPrivateKey(privateKey);

