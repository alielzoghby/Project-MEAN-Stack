const { Author } = require("../models/authors");
const asyncFunction = require('../middlewares/async');

///////////////////////////////// get authors //////////////////////////////////////////

const getAuthors = asyncFunction(async (req, res) => {
const authors = await Author.find();
    res.status(200).send(authors);
});

///////////////////////////////// get author //////////////////////////////////////////

const getAuthorById = asyncFunction(async (req, res) => {
    const { authorId } = req.body
    const oneAuthor = await Author.findById({ id: authorId });
    res.status(200).send(oneAuthor);
});

///////////////////////////////// create author ///////////////////////////////////////

const createNewAuthor = asyncFunction(async (req, res) => {
    const author = new Author({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dateOfBirth,
        photo: req.file && req.file.filename
    });
    author.save().then(() => { res.status(200).send(author);});
});

///////////////////////////////// delete author ///////////////////////////////////////

const deleteAuthorById = asyncFunction(async (req, res) => {
    const author =  await Author.findOneAndDelete({ id: req.body.authorId});
    res.status(200).send(`Deleted author: ${author.firstName}`);
})

///////////////////////////////// update author ///////////////////////////////////////

const updateAuthorById = asyncFunction(async (req, res) => {
    const { authorId, firstName, lastName, dateOfBirth, } = req.body;
    const author= await Author.findOneAndUpdate({ id : authorId }, { $set: { firstName: firstName, lastName: lastName, dob: dateOfBirth } }, { new: true });
    res.status(200).send(author);
})

///////////////////////////////// update photo ////////////////////////////////////////

const updateAuthorPhotoById = asyncFunction(async (req, res) => {
    const { authorId } = req.body;
    const { filename } = req.file;
    const author= await Author.findOneAndUpdate({ id : authorId }, { $set: { photo: filename  } }, { new: true });
    res.status(200).send(author);
});

module.exports = {
    createNewAuthor,
    getAuthors,
    getAuthorById,
    deleteAuthorById,
    updateAuthorById,
    updateAuthorPhotoById
}