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
        templateUrl: './control2.html'
    }),
    __metadata("design:paramtypes", [CommunicateService])
], Control2Control);
export { Control2Control };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBTTlELElBQWEsZUFBZSxHQUE1QjtJQUlJLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRjFELFVBQUssR0FBUyxJQUFJLElBQUksQ0FBQztRQU92QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUhyQyxDQUFDO0lBS0QsWUFBWTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUVELG9CQUFvQjtRQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0NBQ0osQ0FBQTtBQVZHO0lBREMsTUFBTSxFQUFFOztnREFDNEI7QUFUNUIsZUFBZTtJQUozQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsaUJBQWlCO0tBQ2pDLENBQUM7cUNBSzBDLGtCQUFrQjtHQUpqRCxlQUFlLENBbUIzQjtTQW5CWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9lbnRpdGllcy91c2VyXCI7XHJcbmltcG9ydCB7Q29tbXVuaWNhdGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29tbXVuaWNhdGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb250cm9sMicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29udHJvbDIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2wyQ29udHJvbCB7XHJcblxyXG4gICAgbW9kZWw6IFVzZXIgPSBuZXcgVXNlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW11bmljYXRlU2VydmljZTogQ29tbXVuaWNhdGVTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAgIGNsaWNrSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2xpY2suZW1pdChcInByaXZldFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW11bmljYXRlU2VydmljZS50ZXN0KCkpXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tSZWFjdGl2ZUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb21tdW5pY2F0ZVNlcnZpY2UucHJvdmlkZUZpbHRlcih0aGlzLm1vZGVsKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==