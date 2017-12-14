import 'zone.js/dist/zone-node';
import { ServerAppModule } from './module';
import { ngExpressEngine } from '@nguniversal/express-engine/src/main';
import { enableProdMode } from "@angular/core";
enableProdMode();
var expressEngine = function (providers) {
    return ngExpressEngine({
        bootstrap: ServerAppModule,
        providers: providers
    });
};
var ɵ0 = expressEngine;
export { expressEngine };
export { ɵ0 };
//# sourceMappingURL=index.js.map