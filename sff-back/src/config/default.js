export default {
  database: {
    username: 'sff',
    password: 'sff',
    database: 'sff',
    host: process.env.DB_HOST || 'sff-db:3306',
    dialect: 'mysql',
    forceSync: process.env.DB_FORCE_SYNC === 'true' || false
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