const express = require('express'),
    ngExpressEngine = require('@nguniversal/express-engine').ngExpressEngine,
    app = express(),
    path = require('path'),
    fs = require('fs'),
    config = require('./config.json'),
    serverModule = require('./app/server.module').ServerAppModule;



app.engine('html', ngExpressEngine({
    bootstrap: serverModule
}));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use('/', express.static(path.join(__dirname, 'favicon')));
app.use('/', express.static(path.join(__dirname, 'images')));
app.use('/', express.static(path.join(__dirname, 'fonts')));


app.use('/', function (req, res) {
    res.render('index', {
        req: req,
        res: res
    });
});

app.use(function (req, res, next) {
    console.error("сработало 404");
    res.redirect('/not-found?url=' + req.url);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    //err.userMessage = err.userMessage || 'На сервере произошла ошибка';
    // if (res.status() == 200)
    //     res.status(500);
    // res.redirect('/error');
});


module.exports = app;
