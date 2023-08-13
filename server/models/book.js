const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
{
    title: { type: String, required: [true, 'Book Title is required!']},
    author: { type: String, required: [true, 'Book Author is required!']},
    year: { type: Number, required: [true, 'Book Year is required!']},

},
{
    timestamps: true,
}
);

const model = mongoose.model("Book", bookSchema);
module.exports = model;
