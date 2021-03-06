"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class BookReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookReview.belongsTo(models.Book, { foreignKey: "bookId" })
    }
  }
  BookReview.init(
    {
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "BookReview",
    }
  )
  return BookReview
}
