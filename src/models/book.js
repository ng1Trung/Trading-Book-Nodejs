"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.hasMany(models.BookReview)
      models.BookReview.belongsTo(Book)
    }
  }
  Book.init(
    {
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      category: DataTypes.STRING,
      language: DataTypes.STRING,
      publisher: DataTypes.STRING,
      publishing: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      description: DataTypes.TEXT,
      rating: DataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Book",
    }
  )
  return Book
}
