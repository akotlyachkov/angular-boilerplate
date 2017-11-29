const express = require('express'),
    app = express(),
    path = require('path'),
    server = require('./server'),
    browser = require('./browser');

app.use('/css', express.static(path.join(__dirname, 'build')));
app.use('/js', express.static(path.join(__dirname, 'build')));
app.use('/favicon', express.static(path.join(__dirname, 'favicon')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

app.use('/',  function (req, res, next) {
    let ua = req.headers['user-agent'];
    if (/bot|google|yandex|mail\.ru|bing|embedly|guzzlehttp|validator|vk\.com|facebook|slurp|tumblr|undefined|seopult|mailru|mrpc|ok\.ru/i.test(ua)) {
        console.log('робот: ' + ua + ' url: ' + req.url);
        server(req, res);
    }
    else {
        console.log('юзер: ' + ua + ' url: ' + req.url);
        browser(req, res);
    }
});

app.use(function (req, res, next) {
    console.error("сработало 404");
    //res.redirect('/error?url='+req.url);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    err.userMessage = err.userMessage || 'На сервере произошла ошибка';
    if (res.status() == 200)
        res.status(500);
    res.send(err.userMessage);
});

module.exports = app;
