"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class TradeItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TradeItem.init(
    {
      tradeId: DataTypes.INTEGER,
      firstUserBookId: DataTypes.INTEGER, //book of firstUser in trade
      secondUserBookId: DataTypes.INTEGER, //book of secondUser in trade
    },
    {
      sequelize,
      modelName: "TradeItem",
    }
  )
  return TradeItem
}
