import bcrypt from "bcryptjs"
import db from "../models/index"

const salt = bcrypt.genSaltSync(10)

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

const hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hash = await bcrypt.hashSync(password, salt)
      resolve(hash)
    } catch (e) {
      reject(e)
    }
  })
}

const createUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check user Email
      const isExist = await checkUserEmail(data.email)
      if (isExist) {
        resolve({
          errorCode: 2,
          message: "Your email already exist !",
        })
      } else {
        const hashPasswordFromBcrypt = await hashPassword(data.password)
        await db.User.create({
          fullName: data.fullName,
          username: data.username,
          email: data.email,
          password: hashPasswordFromBcrypt,
          address: data.address,
          phoneNumber: data.phoneNumber,
          gender: data.gender === "1" ? true : false,
          birthDay: data.birthDay,
          favoriteTypes: data.favoriteTypes,
          avatar: data.avatar,
        })
        resolve({
          errorCode: 0,
          message: "Create user succeed!",
          data,
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}

const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({ where: { id: userId } })
      console.log(typeof user)

      if (!user) {
        resolve({
          errorCode: 2,
          errorMessage: "User does not exist!",
        })
      }

      await db.User.destroy({ where: { id: userId } })

      resolve({
        errorCode: 0,
        message: "User deleted successfully!",
      })
    } catch (error) {
      reject(error)
    }
  })
}

const updateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //find user -> (if exist) -> update
      if (!data.id) {
        resolve({
          errorCode: 1,
          errorMessage: "Missing required parameter!",
        })
      }

      const user = await db.User.findOne({ where: { id: data.id }, raw: false })

      if (user) {
        user.fullName = data.fullName
        user.username = data.username
        user.email = data.email
        user.address = data.address
        user.phoneNumber = data.phoneNumber
        user.gender = data.gender
        user.birthDay = data.birthDay
        user.favoriteTypes = data.favoriteTypes
        user.avatar = data.avatar

        await user.save()

        resolve({
          errorCode: 0,
          message: "User updated successfully!",
        })
      } else {
        resolve({
          errorCode: 2,
          errorMessage: "User does not exist!",
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}

const getTrades = (tradeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let trades = ""
      let tradeItem = await db.TradeItem.findAll({ where: { tradeId } })
      // console.log(tradeItem)
      if (tradeId === "all") {
        trades = await db.Trade.findAll()
      }
      if (tradeId && tradeId !== "all") {
        trades = await db.Trade.findOne({
          where: { id: tradeId },
        })
      }
      // console.log(trades)
      resolve({ trade: trades, tradeItem })
    } catch (error) {
      reject(error)
    }
  })
}

export {
  handleUserLogin,
  getUsers,
  getTrades,
  createUser,
  deleteUser,
  updateUser,
}
