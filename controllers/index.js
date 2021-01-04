// Models
const Sneaker = require('../models/sneakers');

exports.getAllSneakers = async (req, res) => {
    try {
        res.status(200)
            .send(await Sneaker.find({}));
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

exports.createNewSneakers = async (req, res) => {
    if (!req.body) {
        res.status(400).send('No content found');
    } else {
        try {
            res.status(200)
                .send(await Sneaker.create(req.body))
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}

exports.getSneakersById = async (req, res) => {
    const _id = req.params.id;
    if (!_id) {
        res.status(400).send('No id found');
    } else {
        try {
            res.status(200)
                .send(await Sneaker.findById({ _id }))
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}

exports.updateSneakers = async (req, res) => {
    const _id = req.params.id;
    if (!_id) {
        res.status(400).send('No id found');
    } else {
        try {
            await Sneaker.findByIdAndUpdate(_id, { $set: req.body })
            res.status(200)
                .send(await await Sneaker.findById({ _id }));
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}

exports.deleteSneakers = async (req, res) => {
    if (!_id) {
        res.status(400).send('No id found');
    } else {
        try {
            res.status(200)
                .send(await Sneaker.findByIdAndDelete({ _id }));
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}