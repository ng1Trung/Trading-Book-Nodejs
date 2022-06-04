import { handleUserLogin, getUsers, getTrades } from "../services/userServices"

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

const handleGetUsers = async (req, res) => {
  const userId = req.body.id //all, id
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
  const tradeId = req.body.id
  // console.log(tradeId)
  const trades = await getTrades(tradeId)

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

export { handleLogin, handleGetUsers, handleGetTrades }
