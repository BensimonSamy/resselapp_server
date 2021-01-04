const mongoose = require('mongoose');

module.exports = () => {
    const url = `mongodb://127.0.0.1:${process.env['DATABASE_HOST']}/${process.env['DATABASE_NAME']}`;
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection
    db.once('open', _ => {
        console.log('Database connected:', url)
    });

    db.on('error', err => {
        console.error('connection error:', err)
    });
}