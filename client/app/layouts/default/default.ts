import {Component} from "@angular/core";

@Component({
    selector: 'application',
    templateUrl: './default.html'
})
export class DefaultLayout {

    navs=[
        {path:'/',name:'Главная'},
        {path:'/page1',name:'Страница 1'},
        {path:'/page2',name:'Страница 2'}
    ]
}