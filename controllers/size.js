const Size = require('../models/size');

exports.getAllSizes = async (req, res) => {
    try {
        res.status(200)
            .send(await Size.find({}));
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}