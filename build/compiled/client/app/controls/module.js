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
    ControlsModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    ControlsModule.ctorParameters = function () { return []; };
    return ControlsModule;
}());
export { ControlsModule };
//# sourceMappingURL=module.js.map