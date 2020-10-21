const { User } = require('../db/schema')

const GetProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id)
  } catch (error) {}
}

const CreateUser = async (req, res) => {
  try {
  } catch (error) {}
}

module.exports = {
  GetProfile,
  CreateUser
}
