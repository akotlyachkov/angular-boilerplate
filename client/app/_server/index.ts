import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import {ServerAppModule} from './module';
import {ngExpressEngine} from '@nguniversal/express-engine';

let expressEngine = ngExpressEngine({
    bootstrap: ServerAppModule
});
export {expressEngine};