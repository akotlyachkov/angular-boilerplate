import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../module';
import { DefaultLayout } from "../layouts/default/default";
export class BrowserAppModule {
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
BrowserAppModule.ctorParameters = () => [];
//# sourceMappingURL=module.js.map