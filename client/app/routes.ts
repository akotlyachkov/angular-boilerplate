import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {Page1Page} from "./pages/page1/page1";
import {Page2Page} from "./pages/page2/page2";
import {IndexPage} from "./pages/index/index";

const routes: Routes = [
    {path: '', component:IndexPage},
    {path: 'page1', component: Page1Page},
    {path: 'page2', component: Page2Page}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {
}