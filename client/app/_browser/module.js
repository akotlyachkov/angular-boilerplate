var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../module';
import { DefaultLayout } from "../layouts/default/default";
let BrowserAppModule = class BrowserAppModule {
};
BrowserAppModule = __decorate([
    NgModule({
        bootstrap: [DefaultLayout],
        imports: [
            BrowserModule.withServerTransition({
                appId: 'my-app-id'
            }),
            AppModule
        ]
    })
], BrowserAppModule);
export { BrowserAppModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBV3pELElBQWEsZ0JBQWdCLEdBQTdCO0NBQ0MsQ0FBQTtBQURZLGdCQUFnQjtJQVQ1QixRQUFRLENBQUM7UUFDTixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDMUIsT0FBTyxFQUFFO1lBQ0wsYUFBYSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixLQUFLLEVBQUUsV0FBVzthQUNyQixDQUFDO1lBQ0YsU0FBUztTQUNaO0tBQ0osQ0FBQztHQUNXLGdCQUFnQixDQUM1QjtTQURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge0FwcE1vZHVsZX0gZnJvbSAnLi4vbW9kdWxlJztcclxuaW1wb3J0IHtEZWZhdWx0TGF5b3V0fSBmcm9tIFwiLi4vbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtEZWZhdWx0TGF5b3V0XSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLndpdGhTZXJ2ZXJUcmFuc2l0aW9uKHtcclxuICAgICAgICAgICAgYXBwSWQ6ICdteS1hcHAtaWQnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQXBwTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VyQXBwTW9kdWxlIHtcclxufVxyXG4iXX0=