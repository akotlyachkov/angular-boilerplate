import 'zone.js/dist/zone-node';

import {ServerAppModule} from './module';
import {ngExpressEngine} from '@nguniversal/express-engine/src/main';
import {enableProdMode} from "@angular/core";

enableProdMode();

let expressEngine = (providers) => {return ngExpressEngine({
    bootstrap: ServerAppModule,
    providers:providers
    });
};
export {expressEngine};