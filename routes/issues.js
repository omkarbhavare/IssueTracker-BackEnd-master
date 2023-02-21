const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue_controller');
const passport = require('passport');


// router.post('/createIssue',passport.checkAuthentication,issueController.createIssue);

module.exports = router;