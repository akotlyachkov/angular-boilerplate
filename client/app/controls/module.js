var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { Control1Control } from "./control1/control1";
import { Control2Control } from "./control2/control2";
import { FormsModule } from "@angular/forms";
import { MenusComponent } from "./menus/menus";
import { RouterModule } from "@angular/router";
import { Control3Control } from "./control3/control3";
import { Control4Control } from "./control4/control4";
import { NavbarComponent } from "./navbar/navbar";
import { JumbotronComponent } from "./jumbotron/jumbotron";
import { FooterComponent } from "./footer/footer";
import { BrowserModule } from "@angular/platform-browser";
let ControlsModule = class ControlsModule {
};
ControlsModule = __decorate([
    NgModule({
        declarations: [
            Control1Control,
            Control2Control,
            Control3Control,
            Control4Control,
            MenusComponent,
            NavbarComponent,
            JumbotronComponent,
            FooterComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            RouterModule
        ],
        exports: [
            Control1Control,
            Control2Control,
            Control3Control,
            Control4Control,
            MenusComponent,
            NavbarComponent,
            JumbotronComponent,
            FooterComponent
        ]
    })
], ControlsModule);
export { ControlsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQTRCeEQsSUFBYSxjQUFjLEdBQTNCO0NBRUMsQ0FBQTtBQUZZLGNBQWM7SUEzQjFCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixjQUFjO1lBQ2QsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixlQUFlO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsYUFBYTtZQUNiLFdBQVc7WUFDWCxZQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsY0FBYztZQUNkLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsZUFBZTtTQUNsQjtLQUNKLENBQUM7R0FDVyxjQUFjLENBRTFCO1NBRlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29udHJvbDFDb250cm9sfSBmcm9tIFwiLi9jb250cm9sMS9jb250cm9sMVwiO1xyXG5pbXBvcnQge0NvbnRyb2wyQ29udHJvbH0gZnJvbSBcIi4vY29udHJvbDIvY29udHJvbDJcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7TWVudXNDb21wb25lbnR9IGZyb20gXCIuL21lbnVzL21lbnVzXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29udHJvbDNDb250cm9sfSBmcm9tIFwiLi9jb250cm9sMy9jb250cm9sM1wiO1xyXG5pbXBvcnQge0NvbnRyb2w0Q29udHJvbH0gZnJvbSBcIi4vY29udHJvbDQvY29udHJvbDRcIjtcclxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gXCIuL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IHtKdW1ib3Ryb25Db21wb25lbnR9IGZyb20gXCIuL2p1bWJvdHJvbi9qdW1ib3Ryb25cIjtcclxuaW1wb3J0IHtGb290ZXJDb21wb25lbnR9IGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ29udHJvbDFDb250cm9sLFxyXG4gICAgICAgIENvbnRyb2wyQ29udHJvbCxcclxuICAgICAgICBDb250cm9sM0NvbnRyb2wsXHJcbiAgICAgICAgQ29udHJvbDRDb250cm9sLFxyXG4gICAgICAgIE1lbnVzQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgICAgICBKdW1ib3Ryb25Db21wb25lbnQsXHJcbiAgICAgICAgRm9vdGVyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvbnRyb2wxQ29udHJvbCxcclxuICAgICAgICBDb250cm9sMkNvbnRyb2wsXHJcbiAgICAgICAgQ29udHJvbDNDb250cm9sLFxyXG4gICAgICAgIENvbnRyb2w0Q29udHJvbCxcclxuICAgICAgICBNZW51c0NvbXBvbmVudCxcclxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXHJcbiAgICAgICAgSnVtYm90cm9uQ29tcG9uZW50LFxyXG4gICAgICAgIEZvb3RlckNvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbHNNb2R1bGUge1xyXG5cclxufSJdfQ==