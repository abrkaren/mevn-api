const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    account_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        type: Date,
        default: new Date()
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('transactions', transactionSchema)
