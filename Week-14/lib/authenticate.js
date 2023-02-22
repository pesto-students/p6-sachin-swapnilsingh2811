const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

const authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await User.findOne({ _id: decode.userId })
        if (!user) {
            throw new Error()
        }
        req.user = user;
        req.token = token;
        console.log("Authenticated");
        next();
    } catch (error) {
        console.error(error);
        res.status(401).send({ error: 'Please authenticate.' });
    }
}

module.exports = authenticate