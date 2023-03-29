const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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

userSchema.pre("save", function preSave(next){
    this.password = bcrypt.hashSync(this.password, 10)
    next();
});

userSchema.methods.verifyPassword = function verifyPassword(password){
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};