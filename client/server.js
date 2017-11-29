let app = require('express')(),
    path = require('path'),
    config = require('../config.json'),
    minifyHTML = require('express-minify-html'),
    serverjs = require('./build/server'),
    expressEngine = serverjs.expressEngine;

app.engine('html', expressEngine);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(minifyHTML({override: true}));

app.use('/', function (req, res) {
    res.render('server', {req, res});
});


module.exports = app;