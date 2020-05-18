export default {
  database: {
    username: 'sff',
    password: 'sff',
    database: 'sff',
    host: 'sff-db:3306',
    dialect: 'mysql'
  },
  api: {
    prefix: '/api',
    jwtSecret: process.env.JWT_SECRET || 'NeverShareYourSecret'
  },
  etherScan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    daiContractAddress: '0x6b175474e89094c44da98b954eedeac495271d0f'
  }
}