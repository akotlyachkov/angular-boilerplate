import 'zone.js';
import 'reflect-metadata';
import 'rxjs';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAppModule } from "./module";
export function start() {
    platformBrowserDynamic().bootstrapModule(BrowserAppModule);
}
document.addEventListener('DOMContentLoaded', start, false);
//# sourceMappingURL=index.js.map