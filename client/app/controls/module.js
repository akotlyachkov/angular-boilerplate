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
import { MenuControl } from "./menu/menu";
import { RouterModule } from "@angular/router";
import { Control3Control } from "./control3/control3";
import { Control4Control } from "./control4/control4";
let ControlsModule = class ControlsModule {
};
ControlsModule = __decorate([
    NgModule({
        declarations: [
            Control1Control,
            Control2Control,
            MenuControl,
            Control3Control,
            Control4Control
        ],
        imports: [
            FormsModule,
            RouterModule
        ],
        exports: [
            Control1Control,
            Control2Control,
            MenuControl,
            Control3Control,
            Control4Control
        ]
    })
], ControlsModule);
export { ControlsModule };
