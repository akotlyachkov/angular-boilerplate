const express = require('express'),
    app = express(),
    config = require('../config');

app.get('/config', function (req, res, next) {
    console.log('/congig uid:' + req.uid);
    res.send(config);
});


app.post('/random', function (req, res, next) {
    let random = Math.floor(Math.random() * 10) + 1;
    if (random >= 7) {
        next({userMessage:'Случилась ошибка'})
    }
    res.send({random});
});

app.post('/test', function (req, res, next) {
    res.send({test: true});
});

app.use(function (req, res, next) {
    console.error("сработало 404");
    res.send({'not-found': true});
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    err.userMessage = err.userMessage || 'На сервере произошла ошибка';
    if (res.status() == 200)
        res.status(500);
    res.send(err);
});

module.exports = app;
