const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')

//const publicPath = path.resolve(__dirname, './Public');

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000')
});

app.use(express.static(path.resolve(__dirname,'./Public')));
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './Views/home.html'))
});

app.get('/register.html', function (req, res) {
    res.sendFile(path.resolve(__dirname, './Views/register.html'))
});

app.get('/login.html', function (req, res) {
    res.sendFile(path.resolve(__dirname, './Views/login.html'))
});


app.use(morgan('tiny'))