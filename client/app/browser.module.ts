import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import {DefaultLayout} from "./layouts/default/default";

@NgModule({
    bootstrap: [ DefaultLayout ],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'my-app-id'
        }),
        AppModule
    ]
})
export class BrowserAppModule {}
