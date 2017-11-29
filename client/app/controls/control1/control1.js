import { Component, Input } from "@angular/core";
import { CommunicateService } from "../../services/communicate";
export class Control1Control {
    constructor(communicateService) {
        this.communicateService = communicateService;
    }
    logger() {
        console.log("контрол 1 написал");
    }
}
Control1Control.decorators = [
    { type: Component, args: [{
                selector: 'control1',
                templateUrl: './control1.html'
            },] },
];
Control1Control.ctorParameters = () => [
    { type: CommunicateService, },
];
Control1Control.propDecorators = {
    "logger": [{ type: Input },],
};
//# sourceMappingURL=control1.js.map