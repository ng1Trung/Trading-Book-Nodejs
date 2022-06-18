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
      CloneFrom.belongsTo(models.Book, { foreignKey: "bookId" })
    }
  }
  CloneFrom.init(
    {
      bookId: DataTypes.INTEGER,
      cloneFrom: DataTypes.INTEGER, // ===userId
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "CloneFrom",
    }
  )
  return CloneFrom
}
