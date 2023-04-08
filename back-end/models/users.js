const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    id: {
      type: Number,
      // unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    photo: {
      type: String,
      required: false,
      default: '../public/defaultPhoto/defaultImage2.jpeg',
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  },
);

userSchema.pre('save', function preSave(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.verifyPassword = function verifyPassword(password) {
  return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model('User', userSchema);

userSchema.pre('save', async function () {
  const user = this;
  if (!user.id) {
    const count = await User.countDocuments();
    user.id = count + 1;
  }
});

module.exports = {
  User,
};
