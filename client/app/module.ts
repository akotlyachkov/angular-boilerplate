import {NgModule} from "@angular/core";
import {DefaultLayout} from "./layouts/default";
import {BrowserModule} from "@angular/platform-browser";
import {PagesModule} from "./pages/module";
import {RoutingModule} from "./routes";
import {CommunicateService} from "./services/communicate";
import {Master1Layout} from "./layouts/master1";
import {Master2Layout} from "./layouts/master2";
import {ControlsModule} from "./controls/module";

@NgModule({
    declarations: [
        DefaultLayout,
        Master1Layout,
        Master2Layout
    ],
    imports: [
        BrowserModule,
        ControlsModule,
        PagesModule,
        RoutingModule
    ],
    providers: [CommunicateService],
    bootstrap: [
        DefaultLayout
    ]
})
export class InitModule {

}