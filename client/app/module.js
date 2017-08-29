var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { DefaultLayout } from "./layouts/default/default";
import { PagesModule } from "./pages/module";
import { RoutingModule } from "./routes";
import { CommunicateService } from "./services/communicate";
import { Master1Layout } from "./layouts/master1/master1";
import { Master2Layout } from "./layouts/master2/master2";
import { ControlsModule } from "./controls/module";
import { CommonModule } from "@angular/common";
import { DataProvider } from "./providers/data";
import { HttpClientModule } from "@angular/common/http";
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            DefaultLayout,
            Master1Layout,
            Master2Layout
        ],
        imports: [
            CommonModule,
            HttpClientModule,
            ControlsModule,
            PagesModule,
            RoutingModule
        ],
        providers: [
            CommunicateService,
            DataProvider
        ],
        exports: [
            DefaultLayout
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUF1QnRELElBQWEsU0FBUyxHQUF0QjtDQUVDLENBQUE7QUFGWSxTQUFTO0lBckJyQixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixhQUFhO1lBQ2IsYUFBYTtZQUNiLGFBQWE7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxXQUFXO1lBQ1gsYUFBYTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNQLGtCQUFrQjtZQUNsQixZQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxhQUFhO1NBQ2hCO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FFckI7U0FGWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtEZWZhdWx0TGF5b3V0fSBmcm9tIFwiLi9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdFwiO1xyXG5pbXBvcnQge1BhZ2VzTW9kdWxlfSBmcm9tIFwiLi9wYWdlcy9tb2R1bGVcIjtcclxuaW1wb3J0IHtSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9yb3V0ZXNcIjtcclxuaW1wb3J0IHtDb21tdW5pY2F0ZVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2NvbW11bmljYXRlXCI7XHJcbmltcG9ydCB7TWFzdGVyMUxheW91dH0gZnJvbSBcIi4vbGF5b3V0cy9tYXN0ZXIxL21hc3RlcjFcIjtcclxuaW1wb3J0IHtNYXN0ZXIyTGF5b3V0fSBmcm9tIFwiLi9sYXlvdXRzL21hc3RlcjIvbWFzdGVyMlwiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiLi9jb250cm9scy9tb2R1bGVcIjtcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtEYXRhUHJvdmlkZXJ9IGZyb20gXCIuL3Byb3ZpZGVycy9kYXRhXCI7XHJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRGVmYXVsdExheW91dCxcclxuICAgICAgICBNYXN0ZXIxTGF5b3V0LFxyXG4gICAgICAgIE1hc3RlcjJMYXlvdXRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgQ29udHJvbHNNb2R1bGUsXHJcbiAgICAgICAgUGFnZXNNb2R1bGUsXHJcbiAgICAgICAgUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENvbW11bmljYXRlU2VydmljZSxcclxuICAgICAgICBEYXRhUHJvdmlkZXJcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgRGVmYXVsdExheW91dFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn0iXX0=