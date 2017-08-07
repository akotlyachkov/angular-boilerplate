"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const user_1 = require("../../entities/user");
const communicate_1 = require("../../services/communicate");
let Control2Control = class Control2Control {
    constructor(communicateService) {
        this.communicateService = communicateService;
        this.model = new user_1.User;
        this.onClick = new core_1.EventEmitter();
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
    core_1.Output(),
    __metadata("design:type", Object)
], Control2Control.prototype, "onClick", void 0);
Control2Control = __decorate([
    core_1.Component({
        selector: 'control2',
        templateUrl: 'control2.html'
    }),
    __metadata("design:paramtypes", [communicate_1.CommunicateService])
], Control2Control);
exports.Control2Control = Control2Control;
//# sourceMappingURL=control2.js.map