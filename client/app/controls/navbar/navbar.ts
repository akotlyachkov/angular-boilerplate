import {Component, Input} from "@angular/core";
import {NavbarItem} from "../entities/navbar-item";

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.html'
})
export class NavbarComponent {
    @Input()
    navs: Array<NavbarItem>
}
