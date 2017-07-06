import {Component, Input} from "@angular/core";
import {CommunicateService} from "../../services/communicate";

@Component({
    selector: 'control1',

    templateUrl: 'control1.html'
})
export class Control1Control {

    constructor(private communicateService:CommunicateService){

    }

    @Input()
    logger(): void {
        console.log("контрол 1 написал")
    }
}