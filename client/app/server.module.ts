
import {ServerModule} from '@angular/platform-server';
import {NgModule} from '@angular/core';
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
    name: 'Вася';

    test() {
        console.log(1);
    }
}
