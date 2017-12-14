import { Component, ViewChild } from "@angular/core";
import { Control1Control } from "../../controls/control1/control1";
var Page1Page = (function () {
    function Page1Page() {
    }
    Page1Page.prototype.clickHandler = function () {
        console.log('нажали 1');
        this.control1.logger();
    };
    Page1Page.decorators = [
        { type: Component, args: [{
                    selector: 'page1',
                    templateUrl: './page1.html'
                },] },
    ];
    Page1Page.ctorParameters = function () { return []; };
    Page1Page.propDecorators = {
        "control1": [{ type: ViewChild, args: [Control1Control,] },],
    };
    return Page1Page;
}());
export { Page1Page };
//# sourceMappingURL=page1.js.map