import db from "../models/index"

const getBooksById = (bookId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let books = ""
      if (bookId === "all") {
        books = await db.Book.findAll()
      }
      if (bookId && bookId !== "all") {
        books = await db.Book.findOne({
          where: { id: bookId },
        })
      }
      //   console.log(books)
      resolve(books)
    } catch (error) {
      reject(error)
    }
  })
}

const getBooksByStatus = (bookStatus) => {
  return new Promise(async (resolve, reject) => {
    try {
      let tradedBooks = ""
      switch (bookStatus) {
        case "mine":
          tradedBooks = await db.Book.findAll({ where: { status: "mine" } })
          break
        case "traded":
          tradedBooks = await db.Book.findAll({ where: { status: "traded" } })
          break
        case "liked":
          tradedBooks = await db.Book.findAll({ where: { status: "liked" } })
          break
        case "hidden":
          tradedBooks = await db.Book.findAll({ where: { status: "hidden" } })
          break
      }
      resolve(tradedBooks)
    } catch (error) {
      reject(error)
    }
  })
}

export { getBooksById, getBooksByStatus }
