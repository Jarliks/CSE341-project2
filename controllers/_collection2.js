const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getSingle = async (req, res) => {
    //#swagger.tags=['_collection2']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must be a valid ID to retrieve data.');
    } else {
        const _collection2Id = new ObjectId(req.params.id);
        mongodb.getDb().db().collection('_collection2').find({ _id: _collection2Id}).toArray((err, lists) => {
                if (err) {
                    res.status(400).json({ message: err});
                }
                res.setHeader('contentType', 'application/json');
                res.status(200).json(lists);
            });
    }
};

const create_collection2 = async (req, res) => {
    //#swagger.tags=['_collection2']
    const _collection2data = {
        username: req.body.username,
        question: req.body.question,
        answer: req.body.answer
    };
    const response = await mongodb.getDatabase().db().collection('_collection2').insertOne(_collection2data);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the data.');
    };
};

const update_collection2 = async (req, res) => {
    //#swagger.tags=['_collection2']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must be a valid ID to update data.');
    } else {
        const _collection2Id = new ObjectId(req.params.id);
        const _collection2data = {
            username: req.body.username,
            question: req.body.question,
            answer: req.body.answer
        };
        const response = await mongodb.getDatabase().db().collection('_collection2').replaceOne({ _id: _collection2Id }, _collection2data);
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(response.error || 'Some error occured while updating the data.');
        };
    }
};

const delete_collection2 = async (req, res) => {
    //#swagger.tags=['_collection2']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must be a valid ID to delete data.');
    } else {
        const _collection2Id = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('_collection2').deleteOne({ _id: _collection2Id });
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(response.error || 'Some error occured while updating the data.');
        };
    }
};

module.exports = {
    getSingle,
    create_collection2,
    update_collection2,
    delete_collection2
}