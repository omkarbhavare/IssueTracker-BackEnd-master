const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');




// setv routes
router.get('/',homeController.home);
router.use('/users', require('./users'));
router.use('/project', require('./projects'));
router.use('/issue',require('./issues'))
module.exports = router; 