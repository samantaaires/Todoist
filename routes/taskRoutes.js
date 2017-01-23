var express = require('express');
var router = express.Router();
var taskController = require('../controllers/taskController.js');

/*
 * GET
 */
router.get('/', taskController.list);

/*
 * GET
 */
router.get('/:id', taskController.show);

/*
 * POST
 */
router.post('/', taskController.create);

/*
 * PUT
 */
router.put('/:id', taskController.update);

/*
 * DELETE
 */
router.delete('/:id', taskController.remove);

module.exports = router;
