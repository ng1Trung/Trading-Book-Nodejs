import express from "express"
import {
  handleLogin,
  handleCreateUser,
  handleGetUsers,
  handleDeleteUser,
  handleUpdateUser,
  handleGetTrades,
} from "../controllers/userController"
import {
  handleGetBooksById,
  handleGetBooksByStatus,
  handleCreateBook,
  handleUpdateBook,
  handleDeleteBook,
} from "../controllers/bookController"

const bp = require("body-parser")

const router = express.Router()

const initWebRoutes = (app) => {
  app.use(bp.json())
  app.use(bp.urlencoded({ extended: true }))

  //API
  //users
  router.post("/login", handleLogin)
  router.post("/user/create-user", handleCreateUser)
  router.get("/user/get-users", handleGetUsers)
  router.put("/user/update-user", handleUpdateUser)
  router.delete("/user/delete-user", handleDeleteUser)

  //trades
  router.get("/trade/get-trades", handleGetTrades)

  //books
  router.get("/book/get-books-by-id", handleGetBooksById)
  router.get("/book/get-books-by-status", handleGetBooksByStatus)
  router.post("/book/create-book", handleCreateBook)
  router.put("/book/update-book", handleUpdateBook)
  router.delete("/book/delete-book", handleDeleteBook)

  return app.use("/api/", router)
}

export default initWebRoutes
