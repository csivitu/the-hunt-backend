const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user Schema & model
const UserSchema = new Schema({
    uname:{
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    pass:{
        type: String,
        required: [true, 'Password is required'],
    },
    regno: {
        type: String,
    },
    questions: {
    	type: [Number],
    	default: []
    }
    });

const User = mongoose.model('user', UserSchema);
module.exports = User;