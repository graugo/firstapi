const express = require('express');
const router = express.Router();// objecte que permet crear rutes

const userController = require('../controllers/userController');

router.get('/list', userController.list);
// :id indica un parametre de la route
router.get('/profile/:id?', userController.profile);

module.exports = router;