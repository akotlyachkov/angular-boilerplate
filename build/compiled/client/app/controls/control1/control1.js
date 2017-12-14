import { Component, Input } from "@angular/core";
import { CommunicateService } from "../../services/communicate";
var Control1Control = (function () {
    function Control1Control(communicateService) {
        this.communicateService = communicateService;
    }
    Control1Control.prototype.logger = function () {
        console.log("контрол 1 написал");
    };
    Control1Control.decorators = [
        { type: Component, args: [{
                    selector: 'control1',
                    templateUrl: './control1.html'
                },] },
    ];
    Control1Control.ctorParameters = function () { return [
        { type: CommunicateService, },
    ]; };
    Control1Control.propDecorators = {
        "logger": [{ type: Input },],
    };
    return Control1Control;
}());
export { Control1Control };
//# sourceMappingURL=control1.js.map