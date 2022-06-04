import { getBooksById, getBooksByStatus } from "../services/bookServices"

const handleGetBooksById = async (req, res) => {
  const id = req.body.id
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
  const bookStatus = req.body.status
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

export { handleGetBooksById, handleGetBooksByStatus }
