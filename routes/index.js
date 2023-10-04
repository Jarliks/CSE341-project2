const router = require('express').Router();

router.use('/', require('./swagger'));

router.use('/_collection1', require('./_collection1'));
router.use('/_collection2', require('./_collection2'));

module.exports = router;