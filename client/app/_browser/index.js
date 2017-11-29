import 'zone.js';
import { platformBrowser } from '@angular/platform-browser';
import { BrowserAppModuleNgFactory } from "./module.ngfactory";
function start() {
    platformBrowser().bootstrapModuleFactory(BrowserAppModuleNgFactory);
}
document.addEventListener('DOMContentLoaded', start, false);
//# sourceMappingURL=index.js.map