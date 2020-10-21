const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    popularity_rating: {
      type: Number,
      default: 0
    },
    description: {
      type: String
    },
    location: {
      type: String
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
  },
  { timestamps: true }
)
