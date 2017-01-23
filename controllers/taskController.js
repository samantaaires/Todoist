var taskModel = require('../models/taskModel.js');

/**
 * taskController.js
 *
 * @description :: Server-side logic for managing tasks.
 */
module.exports = {

    /**
     * taskController.list()
     */
    list: function (req, res) {
        taskModel.find(function (err, tasks) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting task.',
                    error: err
                });
            }
            return res.json(tasks);
        });
    },

    /**
     * taskController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        taskModel.findOne({_id: id}, function (err, task) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting task.',
                    error: err
                });
            }
            if (!task) {
                return res.status(404).json({
                    message: 'No such task'
                });
            }
            return res.json(task);
        });
    },

    /**
     * taskController.create()
     */
    create: function (req, res) {
        var task = new taskModel({
			title : req.body.title,
            content : req.body.content
        });

        task.save(function (err, task) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating task',
                    error: err
                });
            }
            return res.status(201).json(task);
        });
    },

    /**
     * taskController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        taskModel.findOne({_id: id}, function (err, task) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting task',
                    error: err
                });
            }
            if (!task) {
                return res.status(404).json({
                    message: 'No such task'
                });
            }

            task.title = req.body.title ? req.body.title : task.title;
			
            task.save(function (err, task) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating task.',
                        error: err
                    });
                }

                return res.json(task);
            });
        });
    },

    /**
     * taskController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        taskModel.findByIdAndRemove(id, function (err, task) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the task.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
