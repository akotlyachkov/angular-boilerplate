import 'zone.js'
import 'reflect-metadata'
import 'rxjs';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAppModule} from "./browser.module";
import {enableProdMode} from "@angular/core";

enableProdMode();

export function main() {
    platformBrowserDynamic().bootstrapModule(BrowserAppModule);
}

document.addEventListener('DOMContentLoaded', main, false);
