const { model } = require('mongoose')
const UserModel = require('./models/User')
const TravelLogModel = require('./models/TravelLog')
const CommentModel = require('./models/Comments')

const User = model('users', UserModel)
const TravelLog = model('travel_logs', TravelLogModel)
const Comment = model('comments', CommentModel)

module.exports = { User, TravelLog, Comment }
