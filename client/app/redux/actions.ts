import {Injectable} from "@angular/core";
import {Action} from "redux";

@Injectable()
export class CounterActions {
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    static RANDOM_LOAD = 'RANDOM_LOAD';
    static RANDOM_DONE = 'RANDOM_DONE';
    static RANDOM_ERROR = 'RANDOM_ERROR';

    increment(): Action {
        return {type: CounterActions.INCREMENT};
    }

    decrement(): Action {
        return {type: CounterActions.DECREMENT};
    }

    randomLoad(): Action {
        return {type: CounterActions.RANDOM_LOAD};
    }

    randomDone(random: number): Action {
        return {type: CounterActions.RANDOM_DONE, payload: random};
    }

    randomError(): Action {
        return {type: CounterActions.RANDOM_ERROR};
    }
}