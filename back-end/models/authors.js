const mongoose = require('mongoose');


const { Schema } = mongoose;

const authorSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },lastName: {
            type: String,
            required: true
        },
        photo: {
            type: String, 
            required: false,
            default: "../public/defaultImage/defaultImage.jpeg"
        },
        dob:{
            type: Date,
            optional: true
        },
    },
);

const Author = mongoose.model('author', authorSchema);

module.exports = {
    Author,
};
