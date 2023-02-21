const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
const passport = require('passport');


router.get('/sign-up',usersController.signup);
router.get('/sign-in',usersController.signin);
router.get('/profile',passport.checkAuthentication,usersController.profile);
router.post('/create',usersController.create);


router.post('/create-session', passport.authenticate(
    'local', { failureRedirect: '/user/sign-in' }
), usersController.createSession);


router.get('/sign-out',usersController.destroySession);

router.get('/auth/google', passport.authenticate('google', {scope: ['profile','email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: 'users/sign-in'}), usersController.createSession);


module.exports = router;