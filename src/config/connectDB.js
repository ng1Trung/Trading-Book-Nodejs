const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("booktrading", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
})

sequelize.define("users", {
  column: Sequelize.STRING + " CHARSET utf8 COLLATE utf8_unicode_ci",
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}

module.exports = connectDB
