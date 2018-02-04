interface IAppState {
    counter?: number;
    random?: number;
}

let initialState: IAppState = {
    counter: 0,
    random: 0
};

export {
    initialState,
    IAppState
};