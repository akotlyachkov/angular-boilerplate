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
const control1_1 = require("../../controls/control1/control1");
let Page1Page = class Page1Page {
    clickHandler() {
        console.log('нажали 1');
        this.control1.logger();
    }
};
__decorate([
    core_1.ViewChild(control1_1.Control1Control),
    __metadata("design:type", control1_1.Control1Control)
], Page1Page.prototype, "control1", void 0);
Page1Page = __decorate([
    core_1.Component({
        selector: 'page1',
        templateUrl: 'page1.html'
    })
], Page1Page);
exports.Page1Page = Page1Page;
//# sourceMappingURL=page1.js.map