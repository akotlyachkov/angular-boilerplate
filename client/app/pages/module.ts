import {NgModule} from "@angular/core";
import {Page1Page} from "./page1/page1";
import {Page2Page} from "./page2/page2";
import {IndexPage} from "./index/index";
import {ControlsModule} from "../controls/module";
@NgModule({
    declarations: [
        IndexPage,
        Page1Page,
        Page2Page
    ],
    imports: [ControlsModule],
    exports: [
        IndexPage,
        Page1Page,
        Page2Page
    ]
})
export class PagesModule {

}