express = require('express')
app = express()
http = require('http')
server = http.Server(app)

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

server.listen(process.env.PORT || 7000, () => {
    console.log('Server Running on http://localhost:7000');
})