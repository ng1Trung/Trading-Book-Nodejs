module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("books", [
      {
        status: "traded",
        ownerId: 1,
        title: "Khu vườn bí mật",
        author: "Frances Burnett",
        category: "Văn học thiếu nhi",
        language: "Tiếng Việt",
        publisher: "NXB Văn học",
        publishing: "2014",
        thumbnail: "fb.com",
        description: `Khu Vườn Bí Mật kể một câu chuyện về khu vườn bị khóa kín suốt 10 năm trời, cho đến khi được Mary, Colin, Dickon đánh thức và hồi sinh với tình yêu và sự chăm sóc thân thiện.
        Khu vườn sống lại cùng với những thay đổi của những người xung quanh. Mary không còn là một tiểu thư ngang ngược. Colin rũ bỏ những tuyệt vọng về sức khỏe để tự hào tuyên bố "sẽ sống mãi". Và như thế, trang viên sáng bừng sức sống con trẻ bởi tình yêu cuộc sống.
        Cuốn sách là tác phẩm nổi tiếng nhất của Frances Burnett, ra đời cách đây hơn một thế kỷ, mang cảm hứng lãng mạn của thời đại mà bà đã sống nhưng vẫn sống động với thời gian bởi những giá trị thuần khiết về ngôn ngữ và tình cảm.`,
        rating: "4.5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {})
  },
}
