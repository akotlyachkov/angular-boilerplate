let app = require('express')(),
    path = require('path');

app.use('/', function (req, res) {
    res.sendFile('browser.html', {root: path.join(__dirname, 'views')})
});

module.exports = app;