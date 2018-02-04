import {NgModule} from "@angular/core";
import {DefaultLayout} from "./layouts/default/default";
import {PagesModule} from "./pages/module";
import {RoutingModule} from "./routes";
import {CommunicateService} from "./services/communicate";
import {Master1Layout} from "./layouts/master1/master1";
import {Master2Layout} from "./layouts/master2/master2";
import {ControlsModule} from "./controls/module";
import {CommonModule} from "@angular/common";
import {DataProvider} from "./providers/data";
import {HttpClientModule} from "@angular/common/http";
import {ServerResponseService} from "./services/status";
import {NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import {IAppState, initialState} from "./redux/state";
import {rootReducer} from "./redux/reducer";
import {createLogger} from 'redux-logger';

@NgModule({
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
        RoutingModule,
        NgReduxModule
    ],
    providers: [
        CommunicateService,
        DataProvider,
        ServerResponseService
    ],
    exports: [
        DefaultLayout
    ]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>,
                devTools: DevToolsExtension) {
        ngRedux.configureStore(rootReducer, initialState, [createLogger()],[devTools.enhancer()]);
    }
}