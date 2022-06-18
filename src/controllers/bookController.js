import {
  getBooksById,
  getBooksByStatus,
  createBook,
  updateBook,
  deleteBook,
} from "../services/bookServices"

const handleGetBooksById = async (req, res) => {
  const id = req.query.id
  if (!id) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing required parameter!",
      users: [],
    })
  }

  const books = await getBooksById(id)
  return res.status(200).json({
    errorCode: 0,
    message: "Completed get books from database!",
    books,
  })
}
const handleGetBooksByStatus = async (req, res) => {
  const bookStatus = req.query.status
  if (!bookStatus) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing required parameter!",
      users: [],
    })
  }

  const books = await getBooksByStatus(bookStatus)
  return res.status(200).json({
    errorCode: 0,
    message: "Completed get books from database!",
    books,
  })
}

const handleCreateBook = async (req, res) => {
  const bookInfo = await createBook(req.body)
  return res.status(200).json(bookInfo)
}

const handleDeleteBook = async (req, res) => {
  const bookId = req.query.id

  if (!bookId) {
    return res.status(200).json({
      errorCode: 1,
      errorMessage: "Can not delete that book!",
    })
  }

  const deletedBook = await deleteBook(bookId)
  return res.status(200).json(deletedBook)
}

const handleUpdateBook = async (req, res) => {
  const updatedBook = await updateBook(req.query)
  return res.status(200).json(updatedBook)
}

export {
  handleGetBooksById,
  handleGetBooksByStatus,
  handleCreateBook,
  handleUpdateBook,
  handleDeleteBook,
}
