import {Component} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'market',
    host:{'class':'sticky-content'},
    template: `<router-outlet></router-outlet>`
})
export class DefaultLayout {

}