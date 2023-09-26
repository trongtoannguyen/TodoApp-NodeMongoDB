const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  todo: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
  },
});

const Todo = new model("Todo", TodoSchema);
module.exports = Todo;
