const express = require('express'),
    helmet = require('helmet'),
    path = require('path'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    config = require('./config'),
    serverApp = require('./server'),
    clientApp = require('./client');
//clientApp = require('./client/server').app;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());
app.use('/', express.static(path.join(__dirname, 'client/build')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


app.use('/api', serverApp);
app.use('/', clientApp);
app.set('mode', process.env.mode || 'browser');
app.set('port', process.env.PORT || config.system.port || '3000');

server.listen(app.get('port'), function () {
    console.log(`Приложение запущено http://localhost:${app.get('port')} в режиме ${app.get('mode')}`);
});
