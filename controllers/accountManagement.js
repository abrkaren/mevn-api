const errorHandler = require('../utils/errorHandler')

const User = require('../models/User')
const Transaction = require('../models/Transaction')

module.exports.healhcheck = async function(req, res) {
    res.status(200).json('SERVICE UP!')
}

module.exports.createsTransaction = async function(req, res) {

    let { account_id, amount } = req.body
    const transaction = await new Transaction({ account_id, amount })

    const candidate = await User.findById(account_id)

    if(!candidate) {
        res.status(409).json({
            message: 'User not found. (Wrong id)'
        })
    } else {
        await transaction.save(); // transaction save

        candidate.balance -= amount;
        await candidate.save(); // update user balance
        res.status(200).json(candidate);
    }

}

module.exports.getTransactions = async function(req, res) {
    try {
        const transaction = await Transaction.find({account_id: req.body.id});

        res.status(200).json(transaction)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getTransactionById = async function(req, res) {
    try {
        const transaction = await Transaction.findById(req.params.id)

        res.status(200).json(transaction)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getAccountBalance = async function(req, res) {
    try {
        const user = await User.findById(req.params.id)

        res.status(200).json(user.balance)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getMaxTransactionVolume = async function(req, res) {
    try {

        const data = await Transaction.aggregate([
            // {$project: { items: 1, account_id: 1}},
            // {$unwind: "$items"},
            { $group:
            { _id: { account_id: "$account_id", item: "$items" },
                count: { $sum: 1 }
            }
            }
        ])

        res.status(200).json(data)
    } catch (e) {
        errorHandler(res, e)
    }
}

