import Sequelize from 'sequelize'
import config from './config/index.js'
import path from 'path'
import fs from 'fs'


class Database {
  constructor () {
    const config = config.database
    const url = `mysql://${config.username}:${config.password}@${config.host}/${config.database}`

    this.sequelize = new Sequelize(url, {
      define: {
        underscored: false,
        timestamps: true,
        paranoid: true
      }
    })
  }

  async initAll () {
    const modelsPath = path.resolve() + '/src/models/'

    try {
      const files = await fs.promises.readdir(modelsPath)

      for (const file of files) {
        const model = await import(modelsPath + file)

        if (model && model.default.init) {
          model.default.init(this.sequelize, Sequelize.DataTypes)
        }
      }

      this.sequelize.sync({ force: config.database.forceSync })
    } catch (e) {
      console.error('Err! ', e)
    }
  }

  getDb () {
    return this.sequelize
  }
}

export default new Database()
