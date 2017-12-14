import { Component, Input } from "@angular/core";
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'navbar',
                    templateUrl: './navbar.html'
                },] },
    ];
    NavbarComponent.ctorParameters = function () { return []; };
    NavbarComponent.propDecorators = {
        "navs": [{ type: Input },],
    };
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.js.map