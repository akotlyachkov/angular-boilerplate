"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
require("rxjs");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const browser_module_1 = require("./browser.module");
const core_1 = require("@angular/core");
core_1.enableProdMode();
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(browser_module_1.BrowserAppModule);
}
exports.main = main;
document.addEventListener('DOMContentLoaded', main, false);
//# sourceMappingURL=index.js.map