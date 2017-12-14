import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../module';
import { DefaultLayout } from "../layouts/default/default";
var BrowserAppModule = (function () {
    function BrowserAppModule() {
    }
    BrowserAppModule.decorators = [
        { type: NgModule, args: [{
                    bootstrap: [DefaultLayout],
                    imports: [
                        BrowserModule.withServerTransition({
                            appId: 'my-app-id'
                        }),
                        AppModule
                    ]
                },] },
    ];
    BrowserAppModule.ctorParameters = function () { return []; };
    return BrowserAppModule;
}());
export { BrowserAppModule };
//# sourceMappingURL=module.js.map