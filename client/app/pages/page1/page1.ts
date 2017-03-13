import {Component, ViewChild} from "@angular/core";
import {Control1Control} from "../../controls/control1/control1";


@Component({
    selector: 'page1',
    templateUrl: 'page1.html'
})
export class Page1Page {

    @ViewChild(Control1Control)
    control1:Control1Control;

    clickHandler():void{
        console.log('нажали 1');
        this.control1.logger();
    }
}