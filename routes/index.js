const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Project 2');
})

router.use('/_collection1', require('./_collection1'));
router.use('/_collection2', require('./_collection2'));

module.exports = router;