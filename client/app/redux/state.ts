interface IAppState {
    counter: number;
}

let initialState: IAppState = {
    counter: 0
};

export {
    initialState,
    IAppState
};