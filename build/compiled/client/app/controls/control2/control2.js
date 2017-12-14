import { Component, EventEmitter, Output } from "@angular/core";
import { User } from "../../entities/user";
import { CommunicateService } from "../../services/communicate";
var Control2Control = (function () {
    function Control2Control(communicateService) {
        this.communicateService = communicateService;
        this.model = new User;
        this.onClick = new EventEmitter();
    }
    Control2Control.prototype.clickHandler = function () {
        this.onClick.emit("privet");
        console.log(this.communicateService.test());
    };
    Control2Control.prototype.clickReactiveHandler = function () {
        this.communicateService.provideFilter(this.model);
    };
    Control2Control.decorators = [
        { type: Component, args: [{
                    selector: 'control2',
                    templateUrl: './control2.html'
                },] },
    ];
    Control2Control.ctorParameters = function () { return [
        { type: CommunicateService, },
    ]; };
    Control2Control.propDecorators = {
        "onClick": [{ type: Output },],
    };
    return Control2Control;
}());
export { Control2Control };
//# sourceMappingURL=control2.js.map