import { createStore } from "redux";

interface Action {
    type: string,
    data: any
}

export interface IAppState {
    alertMsg: string
}

export const store = createStore(reducer);

export const ACT_ALERT = "ACT_ALERT";

function reducer(state: IAppState, action: Action) {
    switch(action.type) {
        case ACT_ALERT: return alert(state, action);
        default: return state;
    }
} 

function alert(state:IAppState, action:Action): IAppState {
    return Object.assign({}, state, {alertMsg: action.data})
}