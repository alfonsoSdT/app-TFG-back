const express = require('express');

const {registerView, loginView} = require('../controllers/controller')

const router = express.Router();

/* GET home page. */
router.get('/login',loginView);
router.get('/register', registerView);

module.exports = router;
