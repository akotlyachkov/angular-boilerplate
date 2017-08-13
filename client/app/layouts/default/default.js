var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var DefaultLayout = (function () {
    function DefaultLayout() {
        this.navs = [
            { path: '/', name: 'Главная' },
            { path: '/page1', name: 'Страница 1' },
            { path: '/page2', name: 'Страница 2' }
        ];
    }
    DefaultLayout = __decorate([
        Component({
            selector: 'application',
            templateUrl: './default.html'
        })
    ], DefaultLayout);
    return DefaultLayout;
}());
export { DefaultLayout };
