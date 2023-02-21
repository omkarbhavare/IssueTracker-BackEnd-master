const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');
const passport = require('passport');

router.post('/create',passport.checkAuthentication,projectController.create);
router.get('/open-project/:id',passport.checkAuthentication,projectController.openProject);
router.get('/destroy/:id',projectController.destroy);
router.post('/createIssue',passport.checkAuthentication,projectController.createIssue);

module.exports = router;