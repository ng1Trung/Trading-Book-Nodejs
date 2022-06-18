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

const createBook = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Book.create({
        status: "mine",
        userId: data.userId,
        title: data.title,
        author: data.author,
        category: data.category,
        language: data.language,
        publisher: data.publisher,
        publishing: data.publishing,
        thumbnail: data.thumbnail,
        description: data.description,
        rating: data.rating,
      })
      resolve({
        errorCode: 0,
        message: "Completed create book!",
        data,
      })
    } catch (error) {
      reject(error)
    }
  })
}

const deleteBook = (bookId) => {
  return new Promise(async (resolve, reject) => {
    const book = await db.Book.findOne({ where: { id: bookId } })
    if (!book) {
      resolve({
        errorCode: 2,
        errorMessage: "Can not find that book to delete!",
      })
    }

    await db.Book.destroy({ where: { id: bookId } })

    resolve({
      errorCode: 0,
      message: "Completed delete book",
    })
  })
}

const updateBook = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errorCode: 1,
          errorMessage: "Missing required parameter!",
        })
      }

      const book = await db.Book.findOne({ where: { id: data.id }, raw: false })
      if (book) {
        book.userId = data.userId
        book.title = data.title
        book.author = data.author
        book.category = data.category
        book.language = data.language
        book.publisher = data.publisher
        book.publishing = data.publishing
        book.thumbnail = data.thumbnail
        book.description = data.description
        book.rating = data.rating

        await book.save()

        resolve({
          errorCode: 0,
          message: "Update book completed!",
        })
      } else {
        resolve({
          errorCode: 2,
          message: "Can not find that book to update!",
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}
export { getBooksById, getBooksByStatus, createBook, deleteBook, updateBook }
