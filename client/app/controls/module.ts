import {NgModule} from "@angular/core";
import {Control1Control} from "./control1/control1";
import {Control2Control} from "./control2/control2";
import {FormsModule} from "@angular/forms";
import {MenuControl} from "./menu/menu";
import {RouterModule} from "@angular/router";
import {Control3Control} from "./control3/control3";
import {Control4Control} from "./control4/control4";
@NgModule({
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
export class ControlsModule {

}