import {Component, Input} from "@angular/core";
import {MenuItem} from "../entities/menu-item";

@Component({
    selector: 'menus',
    templateUrl: 'menus.html'
})
export class MenusComponent {

    @Input()
    menus: Array<MenuItem>;
}
