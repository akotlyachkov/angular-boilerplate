var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { Control1Control } from "../../controls/control1/control1";
let Page1Page = class Page1Page {
    clickHandler() {
        console.log('нажали 1');
        this.control1.logger();
    }
};
__decorate([
    ViewChild(Control1Control),
    __metadata("design:type", Control1Control)
], Page1Page.prototype, "control1", void 0);
Page1Page = __decorate([
    Component({
        selector: 'page1',
        templateUrl: './page1.html'
    })
], Page1Page);
export { Page1Page };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFPakUsSUFBYSxTQUFTLEdBQXRCO0lBS0ksWUFBWTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBQ0osQ0FBQTtBQU5HO0lBREMsU0FBUyxDQUFDLGVBQWUsQ0FBQzs4QkFDbEIsZUFBZTsyQ0FBQztBQUhoQixTQUFTO0lBSnJCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7R0FDVyxTQUFTLENBU3JCO1NBVFksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29udHJvbDFDb250cm9sfSBmcm9tIFwiLi4vLi4vY29udHJvbHMvY29udHJvbDEvY29udHJvbDFcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGFnZTEnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UxLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlMVBhZ2Uge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoQ29udHJvbDFDb250cm9sKVxyXG4gICAgY29udHJvbDE6Q29udHJvbDFDb250cm9sO1xyXG5cclxuICAgIGNsaWNrSGFuZGxlcigpOnZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C90LDQttCw0LvQuCAxJyk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sMS5sb2dnZXIoKTtcclxuICAgIH1cclxufSJdfQ==