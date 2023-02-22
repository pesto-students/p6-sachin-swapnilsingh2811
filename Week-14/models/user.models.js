const { default: mongoose } = require("mongoose");
// const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        max: 255
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        max: 255
    }
})

// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// userSchema.methods.isPasswordMatch = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

const User = mongoose.model('User', userSchema)
module.exports = User