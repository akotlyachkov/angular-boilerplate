var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
let DefaultLayout = class DefaultLayout {
    constructor() {
        this.navs = [
            { path: '/', name: 'Главная' },
            { path: '/page1', name: 'Страница 1' },
            { path: '/page2', name: 'Страница 2' }
        ];
    }
};
DefaultLayout = __decorate([
    Component({
        selector: 'application',
        templateUrl: './default.html'
    })
], DefaultLayout);
export { DefaultLayout };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU14QyxJQUFhLGFBQWEsR0FBMUI7SUFKQTtRQU1JLFNBQUksR0FBQztZQUNELEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDO1lBQ3pCLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDO1lBQ2pDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDO1NBQ3BDLENBQUE7SUFDTCxDQUFDO0NBQUEsQ0FBQTtBQVBZLGFBQWE7SUFKekIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGdCQUFnQjtLQUNoQyxDQUFDO0dBQ1csYUFBYSxDQU96QjtTQVBZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHBsaWNhdGlvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGVmYXVsdC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdExheW91dCB7XHJcblxyXG4gICAgbmF2cz1bXHJcbiAgICAgICAge3BhdGg6Jy8nLG5hbWU6J9CT0LvQsNCy0L3QsNGPJ30sXHJcbiAgICAgICAge3BhdGg6Jy9wYWdlMScsbmFtZTon0KHRgtGA0LDQvdC40YbQsCAxJ30sXHJcbiAgICAgICAge3BhdGg6Jy9wYWdlMicsbmFtZTon0KHRgtGA0LDQvdC40YbQsCAyJ31cclxuICAgIF1cclxufSJdfQ==