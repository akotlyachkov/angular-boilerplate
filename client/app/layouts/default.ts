import {Component} from "@angular/core";


@Component({
    selector: 'app-content',
    host:{'class':'sticky-content'},
    template: `<router-outlet></router-outlet>`
})
export class DefaultLayout {

}