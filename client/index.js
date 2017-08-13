const express = require('express'),
    app = express(),
    path = require('path'),
    config = require('./config.json'),
    mode = process.env.mode || 'browser';

app.use('/favicon', express.static(path.join(__dirname, 'favicon')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

if (mode === 'server') {
    const engine = require('./build/server').expressEngine;
    app.engine('html', engine);
    app.set('view engine', 'html');
    app.set('views', path.join(__dirname, 'views'));
}

app.use('/', function (req, res) {
    if (mode === 'server') {
        res.render('index', {
            req: req,
            res: res
        });
    }
    else {
        res.sendFile('index.html', {root: path.join(__dirname, 'views')})
    }
});

app.use(function (req, res, next) {
    console.error("сработало 404");
    res.redirect('/not-found?url=' + req.url);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    //console.error(err.stack);
});


module.exports = app;
