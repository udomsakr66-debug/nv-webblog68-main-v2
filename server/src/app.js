let express = require('express')
let bodyParser = require('body-parser')

const app = express()

// ใช้งาน body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// เรียกใช้งาน routes (MVC)
require('./routes')(app)

// route ทดสอบ
app.get('/status', function (req, res) {
    res.send('Hello nodejs server')
})

let port = 8081
app.listen(port, function () {
    console.log('server running on ' + port)
})
