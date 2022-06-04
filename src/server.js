import cors from "cors"
import express from "express"
import bodyParser from "body-parser"
require("dotenv").config() //to use process.env

import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
import connectDB from "./config/connectDB"

const app = express()
app.use(cors({ origin: true }))
const port = process.env.PORT || 8008

viewEngine(app)
initWebRoutes(app)

connectDB()

app.listen(port, () => {
  console.log("Backend is running on the port: " + port)
})
