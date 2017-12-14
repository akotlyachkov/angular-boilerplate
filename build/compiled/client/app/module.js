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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=module.js.map