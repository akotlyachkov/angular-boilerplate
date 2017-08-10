import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import {ServerAppModule} from './app/server.module';
import  {ngExpressEngine} from '@nguniversal/express-engine';

let engine = ngExpressEngine({
    bootstrap: ServerAppModule
});
export {engine};