import { Component, EventEmitter, Output } from "@angular/core";
import { User } from "../../entities/user";
import { CommunicateService } from "../../services/communicate";
export class Control2Control {
    constructor(communicateService) {
        this.communicateService = communicateService;
        this.model = new User;
        this.onClick = new EventEmitter();
    }
    clickHandler() {
        this.onClick.emit("privet");
        console.log(this.communicateService.test());
    }
    clickReactiveHandler() {
        this.communicateService.provideFilter(this.model);
    }
}
Control2Control.decorators = [
    { type: Component, args: [{
                selector: 'control2',
                templateUrl: './control2.html'
            },] },
];
Control2Control.ctorParameters = () => [
    { type: CommunicateService, },
];
Control2Control.propDecorators = {
    "onClick": [{ type: Output },],
};
//# sourceMappingURL=control2.js.map