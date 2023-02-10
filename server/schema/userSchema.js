const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const userSchema = new Schema ({
    name: String,
    email: String,
    password: {
        type: String,
        minLength: 5,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    token: String,
    tokenExp: {
        type: String,
        default: '1h',
    }
});

userSchema.pre('save', function(next) {
    let user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function (plainPassword, callback) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return callback(err);
        callback(null, isMatch);
    })
    // if (plainPassword !== this.password) {
    //     return callback("password does not match", false)
    // }
    // return callback(null, true);
}

userSchema.methods.generateToken = function(callback) {
    let user = this;

    let token = jwt.sign(user.toJSON(), 'secretToken', {
        expiresIn: user.tokenExp
    });

    user.token = token;
    user.save((err, user) => {
        if(err) return callback(err);
        callback(null, user);
    })
}

userSchema.statics.findByToken = function(token, callback) {
    let user = this;

    // decode token
    jwt.verify(token, 'secretToken', function(err, decoded) {
        // use user id to find the user
        // check if token matches with the one in DB

        user.findOne({"_id": decoded, "token": token}, function(err, user) {
            if(err) return callback(err);
            callback(null, user);
        })
    })
}

module.exports = { userSchema };