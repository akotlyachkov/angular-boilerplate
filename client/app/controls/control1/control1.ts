import {Component, Input} from "@angular/core";
import {CommunicateService} from "../../services/communicate";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'control1',
    template: `
        <div class="ctrl1">
            <h2>Контрол 1</h2>
            <button (click)="onClick()">Clicked {{ count$ | async }} times</button>
        </div>
    `
})
export class Control1Control {

    readonly count$: Observable<number>;

    constructor(private communicateService: CommunicateService,
               ) {
    }


    onClick() {

    }

    @Input()
    logger(): void {
        console.log("контрол 1 написал")
    }
}