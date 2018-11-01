const express = require('express');
const router = express.Router();

/* Load controller */
const UserController = require('../controllers/userController');
const userController = new UserController();

/**
 * User routes
 */


router.get('/', function (req, res) {
    userController.findAll(res);
});

router.get('/:id', function (req, res) {
    userController.findById(req, res);
});

router.post('/', function (req, res) {
    userController.create(req, res);
});

router.put('/:id', function (req, res) {
    userController.update(req, res);
});

router.delete('/:id', function (req, res) {
    userController.deleteById(req, res);
});

module.exports = router;