import Sequelize from 'sequelize'


class User extends Sequelize.Model {
  static init (sequelize, DataTypes) {
    return super.init(
      {
        email: DataTypes.STRING,
        walletAddress: DataTypes.TEXT
      },
      { sequelize, modelName: 'user' }
    )
  }
}

export default User