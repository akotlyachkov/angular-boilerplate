import 'zone.js'

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserAppModule} from "./module";

function start() {
    platformBrowserDynamic().bootstrapModule(BrowserAppModule);
}

document.addEventListener('DOMContentLoaded', start, false);
