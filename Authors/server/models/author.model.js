const mongoose = require("mongoose")

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "Name must be a minimum of 3 characters"],
    },
},{timestamps: true})

const Authors = mongoose.model("Author", AuthorsSchema)
module.exports = Authors