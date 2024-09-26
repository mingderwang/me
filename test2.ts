const a = require('viem/accounts')
const privateKey = a.generatePrivateKey()

export const owner = a.privateKeyToAccount(privateKey)
console.log(owner)
