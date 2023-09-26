const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const { connect } = require("../database/connect");

try {
  connect();
} catch (error) {
  console.log(error);
}
// GET / todos
router
  .post("/todos", function (req, res) {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    // save the todo
    newTodo
      .save()
      .then(() => {
        console.log("Todo added");
        console.log(newTodo);
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  })
  // GET /delete:id
  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.findByIdAndDelete(_id)
      .then((result) => {
        console.log("Todo deleted");
        console.log(result);
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = router;
