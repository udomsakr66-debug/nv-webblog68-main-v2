let express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/status', (req, res) => {
    res.send('Hello Node.js Server!')
});

app.get('/hello/:name', function (req, res) {
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
});

// get user by id
app.get('/user/:userId', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน'+ req.params.userId)
})
// get all user
app.get('/menus', function (req, res) {
    res.send('เรียกข้อมูลผู้ใช้งาน')
})
// get all user
app.get('/users', function (req, res) {
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
})

// create user
app.post('/user/', function (req, res) {
    res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
})

// edit user
app.put('/user/:userId', function (req, res) {
    res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
})

// delete user
app.delete('/user/:userId', function (req, res) {
    res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
})


let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});