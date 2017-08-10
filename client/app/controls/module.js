var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { Control1Control } from "./control1/control1";
import { Control2Control } from "./control2/control2";
import { FormsModule } from "@angular/forms";
import { MenusComponent } from "./menus/menus";
import { RouterModule } from "@angular/router";
import { Control3Control } from "./control3/control3";
import { Control4Control } from "./control4/control4";
import { NavbarComponent } from "./navbar/navbar";
import { JumbotronComponent } from "./jumbotron/jumbotron";
import { FooterComponent } from "./footer/footer";
import { BrowserModule } from "@angular/platform-browser";
var ControlsModule = (function () {
    function ControlsModule() {
    }
    ControlsModule = __decorate([
        NgModule({
            declarations: [
                Control1Control,
                Control2Control,
                Control3Control,
                Control4Control,
                MenusComponent,
                NavbarComponent,
                JumbotronComponent,
                FooterComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                RouterModule
            ],
            exports: [
                Control1Control,
                Control2Control,
                Control3Control,
                Control4Control,
                MenusComponent,
                NavbarComponent,
                JumbotronComponent,
                FooterComponent
            ]
        })
    ], ControlsModule);
    return ControlsModule;
}());
export { ControlsModule };
