import {NgModule} from "@angular/core";
import {DefaultLayout} from "./layouts/default";
import {BrowserModule} from "@angular/platform-browser";
import {PagesModule} from "./pages/module";
import {ControlsModule} from "./controls/module";
import {RoutingModule} from "./routes";

@NgModule({
    declarations: [
        DefaultLayout
    ],
    imports: [
        BrowserModule,
        PagesModule,
        RoutingModule
    ],
    providers: [],
    bootstrap: [
        DefaultLayout
    ]
})
export class InitModule {

}