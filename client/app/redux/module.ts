import {NgModule} from '@angular/core';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {createLogger} from 'redux-logger';


import {IAppState, initialState} from './state';
import {rootReducer} from './reducer';


@NgModule({
    imports: [NgReduxModule]
})
export class StoreModule {
    constructor(public store: NgRedux<IAppState>,
                devTools: DevToolsExtension,) {
        store.configureStore(rootReducer, initialState, [createLogger()], [devTools.enhancer()]);
    }
}