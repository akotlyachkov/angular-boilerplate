import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import { NgModule} from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    ServerModule,
    AppModule
  ],
  providers: []
})
export class ServerAppModule {

}
