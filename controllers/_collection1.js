const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getSingle = async (req, res) => {
    //#swagger.tags=['_collection1']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must be a valid ID to retrieve data.');
    }
    const _collection1Id = new ObjectId(req.params.id);
    mongodb.getDb().db().collection('_collection1').find({ _id: _collection1Id}).toArray((err, lists) => {
            if (err) {
                res.status(400).json({ message: err});
            }
            res.setHeader('contentType', 'application/json');
            res.status(200).json(lists);
        });
};

const create_collection1 = async (req, res) => {
    //#swagger.tags=['_collection1']
    const _collection1data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        username: req.body.username,
        favoriteColor: req.body.favoriteColor,
        extra: req.body.extra
    };
    const response = await mongodb.getDatabase().db().collection('_collection1').insertOne(_collection1data);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the data.');
    };
};

const update_collection1 = async (req, res) => {
    //#swagger.tags=['_collection1']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must be a valid ID to update data.');
    }
    const _collection1Id = new ObjectId(req.params.id);
    const _collection1data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        username: req.body.username,
        favoriteColor: req.body.favoriteColor,
        extra: req.body.extra
    };
    const response = await mongodb.getDatabase().db().collection('_collection1').replaceOne({ _id: _collection1Id }, _collection1data);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the data.');
    };
};

const delete_collection1 = async (req, res) => {
    //#swagger.tags=['_collection1']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must be a valid ID to delete data.');
    }
    const _collection1Id = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('_collection1').deleteOne({ _id: _collection1Id });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the data.');
    };
};

module.exports = {
    getSingle,
    create_collection1,
    update_collection1,
    delete_collection1
}