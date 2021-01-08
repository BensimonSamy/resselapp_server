
// Controllers
const sneakers = require('../controllers/sneakers');
const size = require('../controllers/size');

module.exports = (app) => {
    // GET LIST OF SNEAKERS
    app.get('/sneakers/', sneakers.getAllSneakers);

    // ADD NEW SNEAKERS
    app.post('/sneakers/', sneakers.createNewSneakers);

    // GET ONE SNEAKERS
    app.get('/sneakers/:id', sneakers.getSneakersById);

    // UPDATE SNEAKERS
    app.put('/sneakers/:id', sneakers.updateSneakers);

    // DELETE SNEAKERS
    app.delete('/sneakers/:id', sneakers.deleteSneakers);

    // GET LIST OF SNEAKERS
    app.get('/sizes/', size.getAllSizes);
}