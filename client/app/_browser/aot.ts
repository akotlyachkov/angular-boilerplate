import 'zone.js'
import 'reflect-metadata'
import 'rxjs';

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAppModuleNgFactory} from "./module.ngfactory";
import {enableProdMode} from "@angular/core";

enableProdMode();

export function main() {
    platformBrowserDynamic().bootstrapModuleFactory(BrowserAppModuleNgFactory);
}

document.addEventListener('DOMContentLoaded', main, false);
