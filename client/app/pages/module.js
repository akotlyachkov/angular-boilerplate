var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { Page1Page } from "./page1/page1";
import { Page2Page } from "./page2/page2";
import { IndexPage } from "./index/index";
import { ControlsModule } from "../controls/module";
import { RouterModule } from "@angular/router";
import { Page3Page } from "./page3/page3";
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    NgModule({
        declarations: [
            IndexPage,
            Page1Page,
            Page2Page,
            Page3Page
        ],
        imports: [
            RouterModule,
            ControlsModule
        ],
        exports: [
            IndexPage,
            Page1Page,
            Page2Page,
            Page3Page
        ]
    })
], PagesModule);
export { PagesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBbUJ4QyxJQUFhLFdBQVcsR0FBeEI7Q0FFQyxDQUFBO0FBRlksV0FBVztJQWxCdkIsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNaO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsWUFBWTtZQUNaLGNBQWM7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDTCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1NBQ1o7S0FDSixDQUFDO0dBQ1csV0FBVyxDQUV2QjtTQUZZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2UxUGFnZX0gZnJvbSBcIi4vcGFnZTEvcGFnZTFcIjtcclxuaW1wb3J0IHtQYWdlMlBhZ2V9IGZyb20gXCIuL3BhZ2UyL3BhZ2UyXCI7XHJcbmltcG9ydCB7SW5kZXhQYWdlfSBmcm9tIFwiLi9pbmRleC9pbmRleFwiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiLi4vY29udHJvbHMvbW9kdWxlXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UGFnZTNQYWdlfSBmcm9tIFwiLi9wYWdlMy9wYWdlM1wiO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSW5kZXhQYWdlLFxyXG4gICAgICAgIFBhZ2UxUGFnZSxcclxuICAgICAgICBQYWdlMlBhZ2UsXHJcbiAgICAgICAgUGFnZTNQYWdlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBDb250cm9sc01vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBJbmRleFBhZ2UsXHJcbiAgICAgICAgUGFnZTFQYWdlLFxyXG4gICAgICAgIFBhZ2UyUGFnZSxcclxuICAgICAgICBQYWdlM1BhZ2VcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VzTW9kdWxlIHtcclxuXHJcbn0iXX0=