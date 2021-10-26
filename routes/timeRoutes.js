const express = require('express');
const router = express.Router();

const timeController = require('../controllers/timeController');

router.get('/mili', timeController.mili);
router.get('/date', timeController.date);
router.get('/hour', timeController.hour);

module.exports = router;