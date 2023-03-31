const mongoose = require('mongoose');


const { Schema } = mongoose;

const authorSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        photo: {
            type: String, 
            required: false,
            default: "../public/defaultPhoto/defaultImage2.jpeg"
        },
        dob:{
            type: Date,
            optional: true
        },
    },
);

authorSchema.pre('save', async function () {
    const author = this;
    if (!author.id) {
      const count = await Author.countDocuments();
      author.id = count + 1;
    }
  });

const Author = mongoose.model('author', authorSchema);

module.exports = {
    Author,
};
