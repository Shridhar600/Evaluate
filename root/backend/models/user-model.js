const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {type: String, required: true, unique: true},
    screenName: {type:String},
    name: {type:String},
    email: {type:String},
    profileImage: {type:String},
    type: {type:String}
})

const User = mongoose.model("user", userSchema);

module.exports = User;