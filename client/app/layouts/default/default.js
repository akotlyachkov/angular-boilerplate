import { Component } from "@angular/core";
export class DefaultLayout {
    constructor() {
        this.navs = [
            { path: '/', name: 'Главная' },
            { path: '/page1', name: 'Страница 1' },
            { path: '/page2', name: 'Страница 2' }
        ];
    }
}
DefaultLayout.decorators = [
    { type: Component, args: [{
                selector: 'application',
                templateUrl: './default.html'
            },] },
];
DefaultLayout.ctorParameters = () => [];
//# sourceMappingURL=default.js.map