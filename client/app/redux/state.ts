
interface IAppState {
    counter: number;
    random: number;
    error: boolean;
    progress: boolean;
}

const initialState: IAppState = {
    counter: 0,
    random: 0,
    error: false,
    progress: false
};


export {
    IAppState,
    initialState
}