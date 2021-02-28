const bcrypt = require('bcryptjs')
const errorHandler = require('../utils/errorHandler')

const User = require('../models/User')

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        res.status(409).json({
            message: 'This email is already taken. Try another one.'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password

        var today = new Date();
        today.setHours(today.getHours());

        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
        })

        try {
            await user.save();

            res.status(201).json(user)
        } catch(e) {
            errorHandler(res, e)
        }

    }
}

module.exports.getUsers = async function(req, res) {
    try {
        const user = await User.find();

        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}
