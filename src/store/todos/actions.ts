import {ADD_TODO, DELETE_TODO, CHECK_TODOS} from "./actionTypes";
import {TTodo} from "src/store/todos/types";
import {action} from "typesafe-actions";

export const addTodos = (payload: TTodo) => action(ADD_TODO, payload);
export const checkTodo = (payload: number) => action(CHECK_TODOS, payload);
export const deleteTodo = (payload: number) => action(DELETE_TODO, payload);
