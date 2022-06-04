module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tradeItem", [
      {
        tradeId: 1,
        firstUserBookId: 1,
        secondUserBookId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tradeId: 4,
        firstUserBookId: 1,
        secondUserBookId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tradeItem", null, {})
  },
}
