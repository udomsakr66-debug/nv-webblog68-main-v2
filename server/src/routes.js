const DrinkController = require('./controllers/DrinkController')

module.exports = (app) => {

    // get all drinks
    app.get('/drinks', DrinkController.index)

    // get drink by id
    app.get('/drink/:id', DrinkController.show)

    // create drink
    app.post('/drink', DrinkController.create)

    // update drink
    app.put('/drink/:id', DrinkController.update)

    // delete drink
    app.delete('/drink/:id', DrinkController.delete)
}
