import {Component, Input} from "@angular/core";
import {CommunicateService} from "../../services/communicate";
import {IAppState} from "../../redux/state";
import {NgRedux, select} from '@angular-redux/store';
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
                private ngRedux: NgRedux<IAppState>) {
        this.count$ = ngRedux.select<number>('counter');
    }

    ngDoCheck (e){
        console.log('ngDoCheck ');
    }
    onClick() {
        this.ngRedux.dispatch({type: 'INCREMENT'});
    }

    @Input()
    logger(): void {
        console.log("контрол 1 написал")
    }
}