const express = require('express');
const router = express.Router();// objecte que permet crear rutes

const userController = require('../controllers/userController');

router.get('/list',userController.list);

module.exports = router;