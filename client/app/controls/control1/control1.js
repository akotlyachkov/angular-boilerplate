var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { CommunicateService } from "../../services/communicate";
let Control1Control = class Control1Control {
    constructor(communicateService) {
        this.communicateService = communicateService;
    }
    logger() {
        console.log("контрол 1 написал");
    }
};
__decorate([
    Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Control1Control.prototype, "logger", null);
Control1Control = __decorate([
    Component({
        selector: 'control1',
        templateUrl: 'control1.html'
    }),
    __metadata("design:paramtypes", [CommunicateService])
], Control1Control);
export { Control1Control };
//# sourceMappingURL=control1.js.map