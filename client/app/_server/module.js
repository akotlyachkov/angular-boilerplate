var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { AppModule } from '../module';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayout } from "../layouts/default/default";
let ServerAppModule = class ServerAppModule {
};
ServerAppModule = __decorate([
    NgModule({
        bootstrap: [DefaultLayout],
        imports: [
            BrowserModule.withServerTransition({
                appId: 'my-app-id'
            }),
            ServerModule,
            AppModule
        ],
    })
], ServerAppModule);
export { ServerAppModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQVl6RCxJQUFhLGVBQWUsR0FBNUI7Q0FDQyxDQUFBO0FBRFksZUFBZTtJQVYzQixRQUFRLENBQUM7UUFDTixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDMUIsT0FBTyxFQUFFO1lBQ0wsYUFBYSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixLQUFLLEVBQUUsV0FBVzthQUNyQixDQUFDO1lBQ0YsWUFBWTtZQUNaLFNBQVM7U0FDWjtLQUNKLENBQUM7R0FDVyxlQUFlLENBQzNCO1NBRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VydmVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1zZXJ2ZXInO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBcHBNb2R1bGV9IGZyb20gJy4uL21vZHVsZSc7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7RGVmYXVsdExheW91dH0gZnJvbSBcIi4uL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbRGVmYXVsdExheW91dF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZS53aXRoU2VydmVyVHJhbnNpdGlvbih7XHJcbiAgICAgICAgICAgIGFwcElkOiAnbXktYXBwLWlkJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFNlcnZlck1vZHVsZSxcclxuICAgICAgICBBcHBNb2R1bGVcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJBcHBNb2R1bGUge1xyXG59XHJcbiJdfQ==