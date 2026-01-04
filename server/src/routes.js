const UserController = require('./controllers/UserController')
const CoffeeController = require('./controllers/CoffeeController')

module.exports = (app) => {
    /* USER */
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users', UserController.index)

    /* COFFEE */
    app.post('/coffee', CoffeeController.create)
    app.get('/coffees', CoffeeController.findAll)
    app.get('/coffee/:id', CoffeeController.findById)
    app.put('/coffee/:id', CoffeeController.update)
    app.delete('/coffee/:id', CoffeeController.remove)
}
อ