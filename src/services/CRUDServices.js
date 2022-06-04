import bcrypt from "bcryptjs"
import db from "../models/"

const salt = bcrypt.genSaltSync(10)

const createUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPasswordFromBcrypt = await hashPassword(data.password)
      await db.User.create({
        fullName: data.fullName,
        username: data.username,
        email: data.email,
        password: hashPasswordFromBcrypt,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1" ? true : false,
        dateOfBirth: data.dateOfBirth,
        favoriteTypesOfBook: data.favoriteTypesOfBook,
        avatar: data.avatar,
      })
      resolve("create new user succeed")
    } catch (e) {
      reject(e)
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

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = db.User.findAll({
        raw: true,
      })
      resolve(users)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  createUser,
  getAllUser,
}
