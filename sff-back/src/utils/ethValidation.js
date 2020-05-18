import ethUtil from 'ethereumjs-util'


const isSignedByAddress = (signedMessage, walletAddress) => {
  const { v, r, s } = ethUtil.fromRpcSig(signedMessage)

  const addressString = walletAddress.replace('0x', '')
  const message = '\x19Ethereum Signed Message:\n' + addressString.length + addressString
  const buffer = new Buffer(message)

  const hashedMessage = ethUtil.hashPersonalMessage(buffer)

  const publicKey = ethUtil.ecrecover(hashedMessage, v, r, s)

  const address = ethUtil.addHexPrefix(ethUtil.pubToAddress(publicKey).toString('hex'))

  return walletAddress.toLowerCase() === address
}

export { isSignedByAddress }