import {NgModule} from "@angular/core";
import {DefaultLayout} from "./layouts/default/default";
import {PagesModule} from "./pages/module";
import {RoutingModule} from "./routes";
import {CommunicateService} from "./services/communicate";
import {Master1Layout} from "./layouts/master1/master1";
import {Master2Layout} from "./layouts/master2/master2";
import {ControlsModule} from "./controls/module";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        DefaultLayout,
        Master1Layout,
        Master2Layout
    ],
    imports: [
        CommonModule,
        HttpModule,
        ControlsModule,
        PagesModule,
        RoutingModule
    ],
    providers: [CommunicateService],
    exports: [
        DefaultLayout
    ]
})
export class AppModule {

}