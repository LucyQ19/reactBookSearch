const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    title: { type: String, required: true},
    authors: { type: String, required: true},
    link: {type: String, trim: true},
    img: {type: String, trim: true},
    description: String,
    date: { type: Date, default: Date.now}
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;