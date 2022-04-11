import {ActionType} from "typesafe-actions";
import { Reducer } from 'redux';
import {ADD_TODO, DELETE_TODO, CHECK_TODOS, ADD_TODO_LIST} from "./actionTypes";
import {TTodo} from './types';
import * as Actions from './actions';

type TActions = typeof Actions;
type TTodosActions = ActionType<TActions>;
const initialState: TTodo[] = [];

const todosReducer: Reducer<TTodo[], TTodosActions> = (state = initialState, action) => {
    switch(action.type){
    case ADD_TODO:
        return [...state, action.payload];
    case DELETE_TODO:
        return state.filter(element => element.id !== action.payload);
    case CHECK_TODOS:
        return state.map(
            element => element.id === action.payload ? {...element, completed: !element.completed} : element
        );
    case ADD_TODO_LIST:
        return [...state, ...action.payload];
    default:
        return state;
    }
};

export default todosReducer;
