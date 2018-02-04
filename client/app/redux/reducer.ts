import {IAppState, initialState} from "./state";
import {Action} from "redux";

export function rootReducer(state: IAppState = initialState, action: Action): IAppState {
    switch (action.type) {
        case 'INCREMENT':
            let newCount = state.counter + 1;
            return {counter: newCount};
        case 'RANDOM':
            return {...state, random: action.payload};
        default:
            return state
    }

}