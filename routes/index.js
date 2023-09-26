var express = require("express");
var router = express.Router();
const Todo = require("../models/todo");

/* GET home page include todo tasks when possible. */

router.get("/", async function (req, res, next) {
  const todos = await Todo.find();
  res.render("index", { title: "Microsoft Todo", todos: todos });
});

module.exports = router;
