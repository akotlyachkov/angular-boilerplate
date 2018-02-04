import {Component} from "@angular/core";

@Component({
    selector: 'application',
    template: `
        <div class="wrapper">
            <navbar class="sidebar" [navs]="navs"></navbar>
            
            <div class="content container">
                <router-outlet></router-outlet>
            </div>
        </div>
        <footer class="footer"></footer>
    `
})
export class DefaultLayout {

    navs = [
        {path: '/page1', name: 'Страница 1'},
        {path: '/page2', name: 'Страница 2'},
        {path: '/page3', name: 'Страница 3'}
    ]
}