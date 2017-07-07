var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from "@angular/core";
import { User } from "../../entities/user";
import { CommunicateService } from "../../services/communicate";
let Control2Control = class Control2Control {
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
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], Control2Control.prototype, "onClick", void 0);
Control2Control = __decorate([
    Component({
        selector: 'control2',
        templateUrl: 'control2.html'
    }),
    __metadata("design:paramtypes", [CommunicateService])
], Control2Control);
export { Control2Control };
