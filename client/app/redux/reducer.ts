import {DECREMENT, INCREMENT, RANDOM_ERROR, RANDOM_GET, RANDOM_SUCCESS, RESET} from "./actions";
import {IAppState, initialState} from "./state";
import {Reducer} from 'redux';
import {FluxStandardAction as Action} from 'flux-standard-action';

export const rootReducer: Reducer<IAppState> = (state: IAppState = initialState, action: Action<IAppState>): IAppState => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                ...{counter: state.counter + 1}
            };

        case DECREMENT:
            return {
                ...state,
                ...{counter: state.counter - 1}
            };

        case RESET:
            return {
                ...state,
                ...action.payload
            };

        case RANDOM_GET:
            return {
                ...state,
                ...{
                    progress: true,
                    error: false
                }
            };

        case RANDOM_SUCCESS:
            return {
                ...state,
                ...action.payload,
                ...{
                    progress: false,
                    error: false
                }
            };

        case RANDOM_ERROR:
            return {
                ...state,
                ...{
                    progress: false,
                    error: true
                }
            };
        default:
            return state;
    }
};