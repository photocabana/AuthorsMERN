const Author = require("../models/author.model")

module.exports = {
    findAllAuthors: (req, res) => {
        Author.find({})
            .then((allAuthors) => {
                res.status(200).json(allAuthors)
            })
            .catch(err => {
                res.status(400).json({message: 'Something went wrong in find all controllers', error: err})
            })
    },

    findOneSingleAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(oneSingleAuthor => {
                res. status(200).json({ author: oneSingleAuthor})
            })
            .catch(err => {
                res.status(400).json({message: 'Something went wrong in find one controllers', error: err})
            })
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(newlyCreatedAuthor => {
                res. status(200).json({ author: newlyCreatedAuthor})
            })
            .catch(err => {
                res.status(400).json({message: 'Something went wrong in create controllers', error: err})
            })

    },

    updateAuthor: (req, res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body,
            {new: true, runValidators: true}
            )
            .then(updateAuthor => {
                res.status(200).json({ author: updateAuthor})
            })
            .catch(err => {
                res.status(400).json({message: 'Something went wrong in update controllers', error: err})
            })
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(deleted => {
                res. status(200).json(deleted)
            })
            .catch(err => {
                res. status(400).json({message: 'Something went wrong in delete controllers', error: err})
            })
    }
}
