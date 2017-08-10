import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {AppModule} from './app.module';
import {BrowserModule} from '@angular/platform-browser';
import {DefaultLayout} from "./layouts/default/default";

@NgModule({
    bootstrap: [DefaultLayout],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'my-app-id'
        }),
        ServerModule,
        AppModule
    ],

})
export class ServerAppModule {

}
