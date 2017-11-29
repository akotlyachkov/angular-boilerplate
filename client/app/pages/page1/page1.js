import { Component, ViewChild } from "@angular/core";
import { Control1Control } from "../../controls/control1/control1";
export class Page1Page {
    clickHandler() {
        console.log('нажали 1');
        this.control1.logger();
    }
}
Page1Page.decorators = [
    { type: Component, args: [{
                selector: 'page1',
                templateUrl: './page1.html'
            },] },
];
Page1Page.ctorParameters = () => [];
Page1Page.propDecorators = {
    "control1": [{ type: ViewChild, args: [Control1Control,] },],
};
//# sourceMappingURL=page1.js.map