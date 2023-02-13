const express = require('express');
const controllers = require('../controllers/position');
const passport = require("passport");
const router = express.Router();

router.get('/:categoryId', passport.authenticate('jwt', {session: false}), controllers.getByCategoryId);
router.post('/', passport.authenticate('jwt', {session: false}), controllers.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controllers.update);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controllers.remove);

module.exports = router;