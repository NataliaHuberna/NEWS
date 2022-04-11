import {
    ADD_TODO,
    DELETE_TODO,
    CHECK_TODOS,
    LOAD_TODOS,
    ADD_TODO_LIST,
    ADD_TODO_TO_SAGA,
    CHECK_TODO_IN_SAGA, DELETE_TODO_FROM_SAGA
} from "./actionTypes";
import {TTodo} from "src/store/todos/types";
import {action} from "typesafe-actions";

export const addTodos = (payload: TTodo) => action(ADD_TODO, payload);
export const checkTodo = (payload: number) => action(CHECK_TODOS, payload);
export const deleteTodo = (payload: number) => action(DELETE_TODO, payload);

export const loadTodos = () => action(LOAD_TODOS);
export const addTodoList = (payload: Array<TTodo>) => action(ADD_TODO_LIST, payload);
export const addTodoToSaga = (payload: TTodo) => action(ADD_TODO_TO_SAGA, payload);
export const checkTodoInSaga = (payload: number) => action(CHECK_TODO_IN_SAGA, payload);
export const deleteTodoSaga = (payload: number) => action(DELETE_TODO_FROM_SAGA, payload);
