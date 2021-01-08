const express = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE")
        next();
    })
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.listen(1000, function () {
        console.log('listening on 1000')
    });
    return app
}