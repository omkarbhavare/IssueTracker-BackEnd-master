const mongoose = require('mongoose');
const path = require('path');

const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    name:{
        type: String,
        required: true
    
    }

},{
    timestamps: true
});

const User = mongoose.model('User',userSchema);

module.exports = User;