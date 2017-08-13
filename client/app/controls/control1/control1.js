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
        templateUrl: './control1.html'
    }),
    __metadata("design:paramtypes", [CommunicateService])
], Control1Control);
export { Control1Control };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU85RCxJQUFhLGVBQWUsR0FBNUI7SUFFSSxZQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUV6RCxDQUFDO0lBR0QsTUFBTTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0NBQ0osQ0FBQTtBQUhHO0lBREMsS0FBSyxFQUFFOzs7OzZDQUdQO0FBVFEsZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUVwQixXQUFXLEVBQUUsaUJBQWlCO0tBQ2pDLENBQUM7cUNBR3lDLGtCQUFrQjtHQUZoRCxlQUFlLENBVTNCO1NBVlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21tdW5pY2F0ZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21tdW5pY2F0ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbnRyb2wxJyxcclxuXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29udHJvbDEuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2wxQ29udHJvbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tdW5pY2F0ZVNlcnZpY2U6Q29tbXVuaWNhdGVTZXJ2aWNlKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGxvZ2dlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItC60L7QvdGC0YDQvtC7IDEg0L3QsNC/0LjRgdCw0LtcIilcclxuICAgIH1cclxufSJdfQ==