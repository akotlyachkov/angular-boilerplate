import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { AppModule } from '../module';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayout } from "../layouts/default/default";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { UniversalInterceptor } from "../services/universal";
export class ServerAppModule {
}
ServerAppModule.decorators = [
    { type: NgModule, args: [{
                bootstrap: [DefaultLayout],
                imports: [
                    BrowserModule.withServerTransition({ appId: 'my-app-id' }),
                    ServerModule,
                    AppModule
                ],
                providers: [{
                        provide: HTTP_INTERCEPTORS,
                        useClass: UniversalInterceptor,
                        multi: true
                    }],
            },] },
];
ServerAppModule.ctorParameters = () => [];
//# sourceMappingURL=module.js.map