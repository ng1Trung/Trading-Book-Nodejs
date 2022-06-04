import db from "../models/index"
import { createUser, getAllUser } from "../services/CRUDServices"

const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll()
    // console.log("-----------------------")
    // console.log(data)

    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    })
  } catch (e) {
    console.log(e)
  }
}

const getCRUD = (req, res) => {
  return res.render("crud.ejs")
}

const postCRUD = async (req, res) => {
  const message = await createUser(req.body)
  return res.send("succeed")
}

const displayCRUD = async (req, res) => {
  const data = await getAllUser()
  // console.log(data)

  return res.render("displayUser.ejs", {
    data,
  })
}

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
  displayCRUD,
}
