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
        tradeId: 2,
        firstUserBookId: 4,
        secondUserBookId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tradeId: 3,
        firstUserBookId: 3,
        secondUserBookId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tradeItem", null, {})
  },
}
