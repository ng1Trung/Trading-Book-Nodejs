module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("trade", [
      {
        status: "success",
        firstUserId: 2,
        secondUserId: 3,
        messageRequest: "Trading request 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "reject",
        firstUserId: 4,
        secondUserId: 2,
        messageRequest: "Trading request 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "requesting",
        firstUserId: 3,
        secondUserId: 4,
        messageRequest: "Trading request 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trade", null, {})
  },
}
