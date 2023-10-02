const express = require('express');
const router = express.Router();

const _collection2Controller = require('../controllers/_collection2');
const validation = require('../middleware/validate');

router.get('/', _collection2Controller.getSingle);

router.post('/', validation.save_collection2, _collection2Controller.create_collection2);

router.put('/:id', validation.save_collection2, _collection2Controller.update_collection2);

router.delete('/:id', _collection2Controller.delete_collection2);

module.exports = router;