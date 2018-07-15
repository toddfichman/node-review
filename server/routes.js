const router = require('express').Router();
//express.Router() creates a modular, mountable route handlers
//a Router instance is a complete middleware and routing system
const controller = require('./controller.js');

router.route('/todolist')
.get(controller.fetch)
.post(controller.post)
.delete(controller.delete);

module.exports = router;