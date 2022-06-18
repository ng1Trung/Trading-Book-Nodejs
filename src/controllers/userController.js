import {
  handleUserLogin,
  getUsers,
  getTrades,
  updateUser,
  createUser,
  deleteUser,
} from "../services/userServices"

const handleLogin = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    res.status(500).json({
      errorCode: 1,
      errorMessage: "Missing input parameter!",
    })
  }
  const userData = await handleUserLogin(email, password)

  return res.status(200).json({
    errorCode: userData.errorCode,
    message: userData.errorMessage,
    user: userData.user,
  })
}

const handleCreateUser = async (req, res) => {
  if (!req.body) {
    return res.status(500).json({
      errorCode: 1,
      errorMessage: "Missing input parameter!",
    })
  }
  const userInfo = await createUser(req.body)
  return res.status(200).json(userInfo)
}

const handleDeleteUser = async (req, res) => {
  if (!req.query.id) {
    res.status(200).json({
      errorCode: 1,
      errorMessage: "Missing required parameter!",
    })
  }
  const deletedUser = await deleteUser(req.query.id)
  return res.status(200).json(deletedUser)
}

const handleUpdateUser = async (req, res) => {
  const updatedUser = await updateUser(req.body)
  return res.status(200).json(updatedUser)
}

const handleGetUsers = async (req, res) => {
  const userId = req.query.id //all, id
  const users = await getUsers(userId)

  if (!userId) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing required parameter!",
      users: [],
    })
  }

  return res.status(200).json({
    errorCode: 0,
    message: "Completed get users from database!",
    users,
  })
}

const handleGetTrades = async (req, res) => {
  const tradeId = req.query.id
  // console.log(tradeId)
  const trades = await getTrades(tradeId)
  // console.log(trades)

  if (!tradeId) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing required parameter!",
      trades: [],
    })
  }

  return res.status(200).json({
    errorCode: 0,
    message: "Completed get trades from database!",
    trades,
  })
}

export {
  handleLogin,
  handleGetUsers,
  handleDeleteUser,
  handleUpdateUser,
  handleGetTrades,
  handleCreateUser,
}
