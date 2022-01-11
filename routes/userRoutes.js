const express = require('express');
const router = express.Router();// objecte que permet crear rutes

const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleWare');

const userSchemas = require('../models/joi/userSchema');

// :id indica un parametre de la ruta
router.get('/profile/:id?',
    userMiddleware.checkId,
    userController.profile
);
router.post('/create',
    userMiddleware.validate(userSchemas.createUserSchema),
    userController.create
);
router.get(`/details/:id`,
    userMiddleware.validate(userSchemas.userIdSchema, `path`),
    userController.findById
);
router.get('/list',
    userMiddleware.validate(userSchemas.selectAllSchema, 'query'),
    userController.selectAll
);
module.exports = router;