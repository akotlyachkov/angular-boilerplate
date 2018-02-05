import {Component} from "@angular/core";

import {Observable} from "rxjs/Observable";
import {select, Store} from "@ngrx/store";
import {DECREMENT, INCREMENT, RESET} from "../../redux/actions";
import {AppState} from "../../redux/state";


@Component({
    selector: 'page3',
    template: `
        <div class="container">
            <div class="row">
                <h2 class="col-xs-12">Страница 3</h2>
                <div class="col-12">
                    <button (click)="increment()">Increment</button>
                    <div>Current Count: {{ counter | async }}</div>
                    <button (click)="decrement()">Decrement</button>

                    <button (click)="reset()">Reset Counter</button>
                </div>
            </div>
        </div>
    `
})
export class Page3Page {

    counter: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter = store.pipe(select('counter'));
    }

    increment() {
        this.store.dispatch({type: INCREMENT});
    }

    decrement() {
        this.store.dispatch({type: DECREMENT});
    }

    reset() {
        this.store.dispatch({type: RESET});
    }
}