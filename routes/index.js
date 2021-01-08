
// Controllers
const sneakers = require('../controllers');

module.exports = (app) => {
    // GET LIST OF SNEAKERS
    app.get('/', sneakers.getAllSneakers);

    // ADD NEW SNEAKERS
    app.post('/', sneakers.createNewSneakers);

    // GET ONE SNEAKERS
    app.get('/:id', sneakers.getSneakersById);

    // UPDATE SNEAKERS
    app.put('/:id', sneakers.updateSneakers);

    // DELETE SNEAKERS
    app.delete('/:id', sneakers.deleteSneakers);
}