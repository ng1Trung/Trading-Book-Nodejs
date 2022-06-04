module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Hồng Hạnh",
        username: "hanhongkut3",
        email: "hanhong2405@gmail.com",
        password: "112233",
        address: "Hà Nội",
        phoneNumber: "0999888666",
        gender: "0",
        dateOfBirth: 2000 - 05 - 24,
        favoriteTypesOfBook: "Ngôn tình, Tình cảm",
        avatar: "fb.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {})
  },
}
