import {Component} from "@angular/core";
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../../redux/state";
import {Observable} from "rxjs/Observable";


@Component({
    selector: 'page3',
    template: `
        <div class="container">
            <div class="row">
                <h2 class="col-xs-12">Страница 3</h2>
                <p>{{random$ | async}}</p>
            </div>
        </div>
    `
})
export class Page3Page {

    @select('random')
    readonly random$: Observable<number>;

    constructor(private ngRedux: NgRedux<IAppState>) {
        ngRedux.dispatch({type: "RANDOM"})
    }
}