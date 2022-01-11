const express = require('express');
const router = express.Router();// objecte que permet crear rutes

const userController = require('../controllers/filmController');
const filmMiddleware = require('../middlewares/filmMiddleware');

const filmSchema = require('../models/joi/filmSchema');

router.get(`/details/:id`,
    filmMiddleware.validate(filmSchema.selectFilmIdSchema, `path`),
    userController.findById
);

module.exports = router;