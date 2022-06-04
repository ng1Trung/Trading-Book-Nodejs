import express from "express"
import {
  getHomePage,
  getCRUD,
  postCRUD,
  displayCRUD,
} from "../controllers/homeController"
import {
  handleLogin,
  handleGetUsers,
  handleGetTrades,
} from "../controllers/userController"
import {
  handleGetBooksById,
  handleGetBooksByStatus,
} from "../controllers/bookController"

const bp = require("body-parser")

const router = express.Router()

const initWebRoutes = (app) => {
  app.use(bp.json())
  app.use(bp.urlencoded({ extended: true }))

  router.get("/", getHomePage)
  router.get("/crud", getCRUD)
  router.post("/post-crud", postCRUD)
  router.get("/get-crud", displayCRUD)

  //API
  //users
  router.post("/api/login", handleLogin)
  router.get("/api/get-users", handleGetUsers)
  router.get("/api/get-trades", handleGetTrades)

  //books
  router.get("/api/get-books-by-id", handleGetBooksById)
  router.get("/api/get-books-by-status", handleGetBooksByStatus)

  return app.use("/", router)
}

export default initWebRoutes
