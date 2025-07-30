
import mongoose from "mongoose";

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    uname: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique:true,
        validate: validateEmail
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },

});

const UserModel = mongoose.models.UserModel || mongoose.model("UserModel", userSchema);
export default UserModel;

