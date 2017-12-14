import 'zone.js';
import { platformBrowser } from '@angular/platform-browser';
import { BrowserAppModule } from "./module";
function start() {
    platformBrowser().bootstrapModule(BrowserAppModule);
}
document.addEventListener('DOMContentLoaded', start, false);
//# sourceMappingURL=index.js.map