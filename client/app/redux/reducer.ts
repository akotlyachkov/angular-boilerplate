import {IAppState, initialState} from "./state";
import {Action} from "redux";

export function rootReducer(state: IAppState = initialState, action: Action): IAppState {
    switch (action.type) {
        case 'INCREMENT':
            let newCount = state.counter + 1;
            return {counter: newCount};
        default:
            return state
    }

}