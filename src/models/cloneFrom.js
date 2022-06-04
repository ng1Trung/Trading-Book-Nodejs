"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class CloneFrom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CloneFrom.init(
    {
      bookId: DataTypes.INTEGER,
      cloneFrom: DataTypes.INTEGER, // ===userId
    },
    {
      sequelize,
      modelName: "CloneFrom",
    }
  )
  return CloneFrom
}
