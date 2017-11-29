import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { AppModule } from '../module';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayout } from "../layouts/default/default";
export class ServerAppModule {
}
ServerAppModule.decorators = [
    { type: NgModule, args: [{
                bootstrap: [DefaultLayout],
                imports: [
                    BrowserModule.withServerTransition({
                        appId: 'my-app-id'
                    }),
                    ServerModule,
                    AppModule
                ],
            },] },
];
ServerAppModule.ctorParameters = () => [];
//# sourceMappingURL=module.js.map