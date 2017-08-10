import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import * as express from 'express';
import  {ngExpressEngine} from '@nguniversal/express-engine';
import  * as path from 'path';
import  {ServerAppModule} from './app/server.module';

import http from 'http';


let app = express();

let  server = http.createServer(app);

app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModule
}));
app.set('view engine', 'html');
app.set('views', 'C:/Samples/angular2-webpack2/client/views');

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
});
server.listen(3000, function () {
    console.log(`Приложение запущено http://localhost:3000`  );
});
//export {app};
//module.exports = app;
