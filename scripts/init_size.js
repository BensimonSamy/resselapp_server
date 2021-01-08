const mongoose = require('mongoose');

const Size = require('../models/size');

const sizes = [
    { eu: 45, us: 11, uk: 10 },
    { eu: 45.5, us: 11.5, uk: 10.5 },
    { eu: 46, us: 12, uk: 11 },
    { eu: 46.5, us: 12.5, uk: 11.5 },
    { eu: 47, us: 13, uk: 12 }
]

const initializeSizes = async () => {
    console.log('initialization in progress...')
    var promises = []
    sizes.forEach(size => promises.push(Size.create(size)))
    console.log('Done')
    return await Promise.all(promises)
}

const url = `mongodb://127.0.0.1:27017/sneakers_app`;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection
db.on('error', err => console.error('connection error:', err));
db.once('open', _ => {
    console.log('Database connected:', url)
});
db.createCollection('size', { unit: String, values: [] })
try { initializeSizes() }
catch (error) { throw error }



