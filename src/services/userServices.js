import bcrypt from "bcryptjs"
import db from "../models/index"

const handleUserLogin = (userEmail, userPassword) => {
  //email exist -> compare password
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { email: userEmail },
        raw: true,
      })
      const userData = {}
      const isExist = await checkUserEmail(userEmail)

      if (isExist) {
        const checkPassword = await bcrypt.compareSync(
          userPassword,
          user.password
        )
        if (checkPassword) {
          userData.errorCode = 0
          userData.errorMessage = "Login successful!"
          delete user.password
          userData.user = user
        } else {
          userData.errorCode = 3
          userData.errorMessage = "Wrong password!"
        }
      } else {
        userData.errorCode = 2
        userData.errorMessage = "Your email does not exist!"
      }
      resolve(userData)
    } catch (error) {
      reject(error)
    }
  })
}

const checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { email: userEmail },
        raw: true,
      })
      if (user) {
        resolve(true)
      } else {
        resolve(false)
      }
    } catch (error) {
      reject(error)
    }
  })
}

const getUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = ""
      if (userId === "all") {
        users = await db.User.findAll({ attributes: { exclude: ["password"] } })
      }
      if (userId && userId !== "all") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: { exclude: ["password"] },
        })
      }
      // console.log(users)
      resolve(users)
    } catch (error) {
      reject(error)
    }
  })
}

const getTrades = (tradeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let trades = ""
      let tradeItem = await db.TradeItem.findAll()
      // console.log(tradeItem)
      if (tradeId === "all") {
        trades = await db.Trade.findAll()
        // console.log(tradeItem)
      }
      if (tradeId && tradeId !== "all") {
        trades = await db.Trade.findOne({
          where: { id: tradeId },
        })
        // console.log(tradeItem)
      }
      // console.log(trades)
      resolve(trades)
    } catch (error) {
      reject(error)
    }
  })
}

export { handleUserLogin, getUsers, getTrades }
