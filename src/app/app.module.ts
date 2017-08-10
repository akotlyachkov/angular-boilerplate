import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import {TestView} from "./test/test-view.component";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'},
      { path: 'test/:id', component: TestView}
    ])
  ],
  declarations: [ AppComponent, HomeView,TestView ],
  exports: [ AppComponent ]
})
export class AppModule {}
