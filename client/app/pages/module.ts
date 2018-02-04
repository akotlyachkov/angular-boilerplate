import {NgModule} from "@angular/core";
import {Page1Page} from "./page1/page1";
import {Page2Page} from "./page2/page2";
import {IndexPage} from "./index/index";
import {ControlsModule} from "../controls/module";
import {RouterModule} from "@angular/router";
import {Page3Page} from "./page3/page3";
import {CommonModule} from "@angular/common";
@NgModule({
    declarations: [
        IndexPage,
        Page1Page,
        Page2Page,
        Page3Page
    ],
    imports: [
        CommonModule,
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
export class PagesModule {

}