import {NgModule} from "@angular/core";
import {Control1Control} from "./control1/control1";
import {Control2Control} from "./control2/control2";
import {FormsModule} from "@angular/forms";
@NgModule({
    declarations: [
        Control1Control,
        Control2Control
    ],
    imports: [FormsModule],
    exports: [
        Control1Control,
        Control2Control
    ]
})
export class ControlsModule {

}