const router = require("express").Router();
const controller = require("./controller.js");

router.route("/todolist")
.get(controller.todolist.fetch)
.post(controller.todolist.post)
.delete(controller.todolist.delete);

module.exports = router;
