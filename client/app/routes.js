var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Page1Page } from "./pages/page1/page1";
import { Page2Page } from "./pages/page2/page2";
import { IndexPage } from "./pages/index/index";
import { Master1Layout } from "./layouts/master1/master1";
import { Master2Layout } from "./layouts/master2/master2";
import { Control3Control } from "./controls/control3/control3";
import { Control4Control } from "./controls/control4/control4";
const routes = [
    {
        path: '', component: Master1Layout, children: [
            { path: '', component: IndexPage },
            { path: 'page1', component: Page1Page }
        ]
    },
    {
        path: 'page2', component: Master2Layout, children: [
            {
                path: '', component: Page2Page, children: [
                    { path: 'subpage3', component: Control3Control },
                    { path: 'subpage4', component: Control4Control },
                ]
            },
        ]
    }
];
let RoutingModule = class RoutingModule {
};
RoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], RoutingModule);
export { RoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUU3RCxNQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUU7WUFDOUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7U0FDeEM7S0FDQTtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRTtZQUNuRDtnQkFDSSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFO29CQUMxQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBQztvQkFDOUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUM7aUJBQ2pEO2FBQ0E7U0FDSjtLQUNBO0NBRUosQ0FBQztBQU9GLElBQWEsYUFBYSxHQUExQjtDQUNDLENBQUE7QUFEWSxhQUFhO0lBTHpCLFFBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7R0FFVyxhQUFhLENBQ3pCO1NBRFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyTW9kdWxlLCBSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlMVBhZ2V9IGZyb20gXCIuL3BhZ2VzL3BhZ2UxL3BhZ2UxXCI7XHJcbmltcG9ydCB7UGFnZTJQYWdlfSBmcm9tIFwiLi9wYWdlcy9wYWdlMi9wYWdlMlwiO1xyXG5pbXBvcnQge0luZGV4UGFnZX0gZnJvbSBcIi4vcGFnZXMvaW5kZXgvaW5kZXhcIjtcclxuaW1wb3J0IHtNYXN0ZXIxTGF5b3V0fSBmcm9tIFwiLi9sYXlvdXRzL21hc3RlcjEvbWFzdGVyMVwiO1xyXG5pbXBvcnQge01hc3RlcjJMYXlvdXR9IGZyb20gXCIuL2xheW91dHMvbWFzdGVyMi9tYXN0ZXIyXCI7XHJcbmltcG9ydCB7Q29udHJvbDNDb250cm9sfSBmcm9tIFwiLi9jb250cm9scy9jb250cm9sMy9jb250cm9sM1wiO1xyXG5pbXBvcnQge0NvbnRyb2w0Q29udHJvbH0gZnJvbSBcIi4vY29udHJvbHMvY29udHJvbDQvY29udHJvbDRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLCBjb21wb25lbnQ6IE1hc3RlcjFMYXlvdXQsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEluZGV4UGFnZX0sXHJcbiAgICAgICAge3BhdGg6ICdwYWdlMScsIGNvbXBvbmVudDogUGFnZTFQYWdlfVxyXG4gICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAncGFnZTInLCBjb21wb25lbnQ6IE1hc3RlcjJMYXlvdXQsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnJywgY29tcG9uZW50OiBQYWdlMlBhZ2UsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtwYXRoOiAnc3VicGFnZTMnLCBjb21wb25lbnQ6IENvbnRyb2wzQ29udHJvbH0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnc3VicGFnZTQnLCBjb21wb25lbnQ6IENvbnRyb2w0Q29udHJvbH0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbiAgICB9XHJcblxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGluZ01vZHVsZSB7XHJcbn0iXX0=