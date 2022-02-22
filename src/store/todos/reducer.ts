import {ActionType} from "typesafe-actions";
import { Reducer } from 'redux';
import {ADD_TODO, DELETE_TODO, CHECK_TODOS} from "./actionTypes";
import {TTodo} from './types';
import * as Actions from './actions';

type TActions = typeof Actions;
type TTodosActions = ActionType<TActions>;
const initialState: Array<TTodo> = [{value: 'task', id: 1, checked: false}];

const todosReducer: Reducer<TTodo[], TTodosActions> = (state = initialState, action) => {
    switch(action.type){
    case ADD_TODO:
        return [...state, action.payload];
    case DELETE_TODO:
        return state.filter(element => element.id !== action.payload);
    case CHECK_TODOS:
        return state.map(element => element.id === action.payload ? {...element, checked: !element.checked} : element);
    default:
        return state;
    }
};

export default todosReducer;
