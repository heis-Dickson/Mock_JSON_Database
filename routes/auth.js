const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');

//router to create a user
router.post('/login',loginController.login);




module.exports = router;