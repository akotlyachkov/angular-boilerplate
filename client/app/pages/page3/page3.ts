import {Component} from "@angular/core";

import {Observable} from "rxjs/Observable";
import {DECREMENT, INCREMENT, reset} from "../../redux/actions";
import {IAppState} from "../../redux/state";
import {NgRedux} from "@angular-redux/store";


@Component({
    selector: 'page3',
    template: `
        <div class="container">
            <div class="row">
                <h2 class="col-xs-12">Страница 3</h2>
                <div class="col-12">
                    <button (click)="increment()">Increment</button>
                    <div>Current Count: {{ counter$ | async }}</div>
                    <button (click)="decrement()">Decrement</button>
                    <hr>
                    <button (click)="reset()">Reset Counter</button>
                </div>
            </div>
        </div>
    `
})
export class Page3Page {

    counter$: Observable<number>;

    constructor(private ngRedux: NgRedux<IAppState>) {
        this.counter$ = ngRedux.select('counter')
    }

    increment() {
        this.ngRedux.dispatch({type: INCREMENT});
    }

    decrement() {
        this.ngRedux.dispatch({type: DECREMENT});
    }

    reset() {
        this.ngRedux.dispatch(reset({counter:3}));
    }
}