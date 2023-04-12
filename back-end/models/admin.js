const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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

adminSchema.pre('save', function preSave(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

adminSchema.methods.verifyPassword = function verifyPassword(password) {
  return bcrypt.compareSync(password, this.password);
};
const Admin = mongoose.model('Admin', adminSchema);



module.exports = {
  Admin,
};
