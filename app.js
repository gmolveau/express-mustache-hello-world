const express = require('express')
const mustacheExpress = require('mustache-express');

const app = express()
const port = 3000

app.engine('mustache', mustacheExpress()); // template files should have .mustache extension
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.render('index', {"name": "World"});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})