"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const control1_1 = require("./control1/control1");
const control2_1 = require("./control2/control2");
const forms_1 = require("@angular/forms");
const menus_1 = require("./menus/menus");
const router_1 = require("@angular/router");
const control3_1 = require("./control3/control3");
const control4_1 = require("./control4/control4");
const navbar_1 = require("./navbar/navbar");
const jumbotron_1 = require("./jumbotron/jumbotron");
const footer_1 = require("./footer/footer");
const platform_browser_1 = require("@angular/platform-browser");
let ControlsModule = class ControlsModule {
};
ControlsModule = __decorate([
    core_1.NgModule({
        declarations: [
            control1_1.Control1Control,
            control2_1.Control2Control,
            control3_1.Control3Control,
            control4_1.Control4Control,
            menus_1.MenusComponent,
            navbar_1.NavbarComponent,
            jumbotron_1.JumbotronComponent,
            footer_1.FooterComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule
        ],
        exports: [
            control1_1.Control1Control,
            control2_1.Control2Control,
            control3_1.Control3Control,
            control4_1.Control4Control,
            menus_1.MenusComponent,
            navbar_1.NavbarComponent,
            jumbotron_1.JumbotronComponent,
            footer_1.FooterComponent
        ]
    })
], ControlsModule);
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=module.js.map