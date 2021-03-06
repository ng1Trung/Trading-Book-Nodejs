module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user", [
      {
        fullName: "Jason Nguyễn",
        username: "admin",
        email: "j4s0ntr4520@gmail.com",
        password: "112233",
        address: "Hà Nội",
        phoneNumber: "0966462601",
        gender: "0",
        birthDay: 2000 - 05 - 04,
        favoriteTypes: "Trinh thám, Hành động",
        avatar: "fb.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Nguyễn Văn A",
        username: "ngVanA",
        email: "ngvA112233@gmail.com",
        password: "123234",
        address: "Quảng Ninh",
        phoneNumber: "0999888666",
        gender: "0",
        birthDay: 1996 - 08 - 10,
        favoriteTypes: "Ngôn tình, Tình cảm",
        avatar: "fb.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Nguyễn Thị D",
        username: "ngThiD",
        email: "ngThiD123456@gmail.com",
        password: "001122",
        address: "Bình Định",
        phoneNumber: "0923758390",
        gender: "1",
        birthDay: 1989 - 11 - 23,
        favoriteTypes: "Thiếu nhi, Hài kịch",
        avatar: "fb.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Vũ Thị H",
        username: "vuThiH",
        email: "vuThiH240500@gmail.com",
        password: "123445",
        address: "Lào Cai",
        phoneNumber: "0938405388",
        gender: "1",
        birthDay: 2000 - 05 - 24,
        favoriteTypes: "Lãng mạn, Tình cảm",
        avatar: "fb.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {})
  },
}
