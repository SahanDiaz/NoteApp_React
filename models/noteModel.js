const mongoose = require("mongoose");

const noteSchema = {
  title: String,
  content: toString,
};
const Note = mongoose.model("Note", noteSchema);

module.exports = Notes;
