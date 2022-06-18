module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("book", [
      {
        status: "mine",
        userId: 2,
        title: "Khu vườn bí mật",
        author: "Frances Burnett",
        category: "Văn học thiếu nhi",
        language: "Tiếng Việt",
        publisher: "Văn học",
        publishing: "2014",
        thumbnail: "fb.com",
        description: `Khu Vườn Bí Mật kể một câu chuyện về khu vườn bị khóa kín suốt 10 năm trời, cho đến khi được Mary, Colin, Dickon đánh thức và hồi sinh với tình yêu và sự chăm sóc thân thiện.
        Khu vườn sống lại cùng với những thay đổi của những người xung quanh. Mary không còn là một tiểu thư ngang ngược. Colin rũ bỏ những tuyệt vọng về sức khỏe để tự hào tuyên bố "sẽ sống mãi". Và như thế, trang viên sáng bừng sức sống con trẻ bởi tình yêu cuộc sống.
        Cuốn sách là tác phẩm nổi tiếng nhất của Frances Burnett, ra đời cách đây hơn một thế kỷ, mang cảm hứng lãng mạn của thời đại mà bà đã sống nhưng vẫn sống động với thời gian bởi những giá trị thuần khiết về ngôn ngữ và tình cảm.`,
        rating: "4.5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "traded",
        userId: 3,
        title: "Hai vạn dặm dưới đáy biển",
        author: "Jules Verne",
        category: "Khoa học",
        language: "Tiếng Việt",
        publisher: "Hồng Đức",
        publishing: "2020",
        thumbnail: "fb.com",
        description: `Một con thủy quái khổng lồ bỗng nhiên xuất hiện làm điêu đứng cả ngành hàng hải.
        Một đoàn thám hiểm nhổ chiếc neo tàu ra khơi với nhiệm vụ tiêu diệt con quái vật ấy, dù có phải đánh đổi bằng cả mạng sống.
        Một chiếc tàu ngầm thoắt ẩn, thoắt hiện, cùng một vị thuyền trưởng mang trong mình lời thề sẽ không bao giờ can dự vào cuộc sống trên đất liền thêm một lần nào nữa…
        Tất cả những bí mật sâu kín nhất của đại dương sâu thẳm, những phát minh chưa từng được biết đến, những mối nguy hiểm rình rập trong lòng biển cả… Tất cả đã quyện cùng với nhau để tạo nên một chuyến phiêu lưu li kì, hấp dẫn mà các bạn không thể bỏ qua, khi đã cầm trên tay cuốn sách “Hai vạn dặm dưới biển” của Jules Verne.`,
        rating: "4.5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "liked",
        userId: 3,
        title: "Ngày mai",
        author: "Guillame Musso",
        category: "Lãng mạn",
        language: "Tiếng Việt",
        publisher: "Hội Nhà Văn",
        publishing: "2018",
        thumbnail: "fb.com",
        description: `Emma tìm kiếm trong vô vọng người đàn ông của đời mình. Matthew vừa mất vợ sau một tại nạn khủng khiếp. Cả hai thấy như cơ hội một lần nữa lại mở ra với mình khi tình cờ gặp nhau trên mạng. 
        Họ hẹn nhau tại một nhà hàng. Vào cùng một ngày, cùng một giờ, họ cùng đẩy cửa bước vào cùng một nhà hàng, bước tới cùng một bàn nhưng lại không gặp nhau. Một trò đùa? Hay một màn lừa đảo? 
        Đây không đơn giản là một cuộc hẹn bị lỡ. Giữa họ là thời gian ngăn cách: cô ở quá khứ còn anh thuộc tương lai. Trong cuộc rượt đuổi giành giật với thời gian, Emma không biết rằng cô sẽ khám phá ra bí mật khủng khiếp vốn vẫn núp sau lá bài tình yêu.`,
        rating: "4.5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "hidden",
        userId: 4,
        title: "Bắt trẻ đồng xanh",
        author: "J.D. Salinger",
        category: "Tiểu thuyết",
        language: "Tiếng Việt",
        publisher: "Hội Nhà Văn",
        publishing: "2017",
        thumbnail: "fb.com",
        description: `Holden Caulfield, 17 tuổi, đã từng bị đuổi học khỏi ba trường, và trường dự bị đại học Pencey Prep là ngôi trường thứ tư. Và rồi cậu lại trượt 4 trên 5 môn học và nhận được thông báo đuổi học. Câu chuyện kể về chuỗi ngày tiếp theo sau đó của Holden, với ánh nhìn cay độc, giễu cợt vào một cuộc đời tẻ nhạt, xấu xa, trụy lạc và vô phương hướng của một thanh niên trẻ.
        Bắt trẻ đồng xanh đã từng trở thành chủ đề tranh luận hết sức sâu rộng tại Mỹ. Sau rất nhiều thị phi, tác phẩm đã được đưa vào giảng dạy tại chương trình trung học Mỹ. Và hơn thế, tạp chí Time đã xếp Bắt trẻ đồng xanh vào một trong 100 tác phẩm viết bằng tiếng Anh hay nhất từ năm 1923 đến nay.`,
        rating: "4.5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("book", null, {})
  },
}
