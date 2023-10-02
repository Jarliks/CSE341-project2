const express = require('express');
const router = express.Router();

const _collection1Controller = require('../controllers/_collection1');
const validation = require('../middleware/validate');

router.get('/', _collection1Controller.getSingle);

router.post('/', validation.save_collection1, _collection1Controller.create_collection1);

router.put('/:id', validation.save_collection1, _collection1Controller.update_collection1);

router.delete('/:id', _collection1Controller.delete_collection1);

module.exports = router;