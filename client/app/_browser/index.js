import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAppModule } from "./module";
export function start() {
    platformBrowserDynamic().bootstrapModule(BrowserAppModule);
}
document.addEventListener('DOMContentLoaded', start, false);
//# sourceMappingURL=index.js.map