const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const userSchema = new Schema({

    email :{
        type: String,
        required : true,
        unique : true
    },
    firstName :{
        type: String,
        required : true
    },

    lastName :{
        type: String,
        required : true
    },

    password: {
        type: String,
        required: true
    },
    imageUrl :{
        type : String,
        default : ''
    },
    
    ads: [{
        type: Schema.Types.ObjectId,
        ref: 'Ad'
    }],
    favourites :[{
        type: Schema.Types.ObjectId,
        ref: 'Ad'
    }],
});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new Model('User', userSchema);