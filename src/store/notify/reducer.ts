import {CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from "./actionTypes";
import {TNotify} from "src/store/notify/types";

const initialState: TNotify = {type: '', message: ''};
type TAction = {
    type: string;
    payload?: any
};

const notificationReducer = (state = initialState, {type, payload}: TAction) => {
    switch (type) {
    case SHOW_NOTIFICATION:
        return {...payload, type: payload.type || 'success'};
    case CLEAR_NOTIFICATION:
        return {type: '', message: ''};
    default:
        return state;
    }
};

export default notificationReducer;
