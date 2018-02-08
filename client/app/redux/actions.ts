
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const RANDOM_GET = 'RANDOM_GET';
export const RANDOM_SUCCESS = 'RANDOM_SUCCESS';
export const RANDOM_ERROR = 'RANDOM_ERROR';

export function reset(num) {
    return {
        type: RESET,
        payload: num
    }
}