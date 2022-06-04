module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("trades", [
      {
        status: "success",
        firstUserId: 1,
        secondUserId: 2,
        messageRequest: "Trading request",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "reject",
        firstUserId: 3,
        secondUserId: 4,
        messageRequest: "Trading request 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "requesting",
        firstUserId: 5,
        secondUserId: 6,
        messageRequest: "Trading request 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trades", null, {})
  },
}
