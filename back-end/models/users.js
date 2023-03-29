const mongoose = require('mongoose');


const{ Schema } = mongoose;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        photo: {
            data: Buffer,
            contentType:String,
        }
    },
    {
        timestamps: true,
        toJSON: {
            // to hide password from body 
            transform(doc, ret){
                delete ret.password;
            }
        }
    },
);

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};