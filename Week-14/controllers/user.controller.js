const User = require("../models/user.models");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userExists = await User.findOne({ username });
        if (userExists) throw new Error("User already exists");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = User.create({
            username,
            password: hashedPassword
        })
        res.status(200).json(user)
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: `${error.message}` });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // console.log("qewe", username, password);
        const user = await User.findOne({ username })
        if (!user) {
            res.status(401).json({ message: 'Invalid user name or password' })
            return;
        }
        // console.log(user);
        // // console.log(user);
        // const isValid = await user.isPasswordMatch(password)
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            res.status(401).json({ message: 'Invalid user name or password' })
            return;
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
        res.json({
            ...user,
            token: token
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: `${error.message}` });
    }
}

module.exports = {
    login,
    register
}