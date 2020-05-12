import Sequelize from 'sequelize'


class User extends Sequelize.Model {
  static init (sequelize, DataTypes) {
    return super.init(
      {
        name: DataTypes.STRING,
        walletAddress: DataTypes.TEXT
      },
      { sequelize, modelName: 'user' }
    )
  }
}

export default User