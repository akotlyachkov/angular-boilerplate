import { Component } from "@angular/core";
var DefaultLayout = (function () {
    function DefaultLayout() {
        this.navs = [
            { path: '/', name: 'Главная' },
            { path: '/page1', name: 'Страница 1' },
            { path: '/page2', name: 'Страница 2' }
        ];
    }
    DefaultLayout.decorators = [
        { type: Component, args: [{
                    selector: 'application',
                    templateUrl: './default.html'
                },] },
    ];
    DefaultLayout.ctorParameters = function () { return []; };
    return DefaultLayout;
}());
export { DefaultLayout };
//# sourceMappingURL=default.js.map