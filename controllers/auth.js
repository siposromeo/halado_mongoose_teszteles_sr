const path = require('path')
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
// @desc   Register user
// @route  POST /api/auth/register
// @access Public

exports.register = async (req, res, next) => {
    res.status(200).json({ success: true })
}

exports.register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body
        //Create user
        const user = await User.create({
            name,
            email,
            password,
            role,
        })
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
}

exports.register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body
        const user = await User.create({
            name,
            email,
            password,
            role,
        })

        const token = user.getSignedJwtToken()
        res.status(200).json({ success: true, token })
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
}
