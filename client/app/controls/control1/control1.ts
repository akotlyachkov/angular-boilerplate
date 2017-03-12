import {Component, Input} from "@angular/core";
import {CommunicateService} from "../../services/communicate";



@Component({
    moduleId: module.id,
    selector: 'control1',
    styleUrls:['control1.scss'],
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