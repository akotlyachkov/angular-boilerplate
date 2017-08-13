var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { CommunicateService } from "../../services/communicate";
import { User } from "../../entities/user";
let Page2Page = class Page2Page {
    constructor(srv) {
        this.srv = srv;
        this.model = new User;
        this.observer = {
            next: function (obj) {
                obj.name += ' 1';
                console.dir(obj);
                this.model = obj;
            }
        };
        this.model.name = "d";
        this.srv.filterObservable.subscribe(obj => {
            obj.name += ' 1';
            console.dir(obj);
            this.model = obj;
        });
    }
    testik($event) {
        console.log(`from page2 "${$event}"`);
    }
};
Page2Page = __decorate([
    Component({
        selector: 'page2',
        templateUrl: './page2.html'
    }),
    __metadata("design:paramtypes", [CommunicateService])
], Page2Page);
export { Page2Page };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQVF6QyxJQUFhLFNBQVMsR0FBdEI7SUFXSSxZQUFvQixHQUF1QjtRQUF2QixRQUFHLEdBQUgsR0FBRyxDQUFvQjtRQVYzQyxVQUFLLEdBQVMsSUFBSSxJQUFJLENBQUM7UUFFdkIsYUFBUSxHQUFHO1lBQ1AsSUFBSSxFQUFFLFVBQVUsR0FBRztnQkFDZixHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDckIsQ0FBQztTQUNKLENBQUM7UUFHRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRztZQUNuQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Q0FDSixDQUFBO0FBdkJZLFNBQVM7SUFKckIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQztxQ0FZMkIsa0JBQWtCO0dBWGxDLFNBQVMsQ0F1QnJCO1NBdkJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21tdW5pY2F0ZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21tdW5pY2F0ZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9lbnRpdGllcy91c2VyXCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwYWdlMicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZTIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2UyUGFnZSB7XHJcbiAgICBtb2RlbDogVXNlciA9IG5ldyBVc2VyO1xyXG5cclxuICAgIG9ic2VydmVyID0ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgb2JqLm5hbWUgKz0gJyAxJztcclxuICAgICAgICAgICAgY29uc29sZS5kaXIob2JqKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG9iajtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBDb21tdW5pY2F0ZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLm5hbWUgPSBcImRcIjtcclxuICAgICAgICB0aGlzLnNydi5maWx0ZXJPYnNlcnZhYmxlLnN1YnNjcmliZShvYmogPT4ge1xyXG4gICAgICAgICAgICBvYmoubmFtZSArPSAnIDEnO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRpcihvYmopO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gb2JqO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdGlrKCRldmVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZyb20gcGFnZTIgXCIkeyRldmVudH1cImApXHJcbiAgICB9XHJcbn0iXX0=