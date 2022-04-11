import {call, takeEvery, put} from 'redux-saga/effects';
import axios from "axios";
import {BASE_URL} from "src/constants/api";
import {addTodoList, addTodos, addTodoToSaga, checkTodo, checkTodoInSaga, deleteTodo} from "src/store/todos/actions";
import {ADD_TODO_TO_SAGA, CHECK_TODO_IN_SAGA, DELETE_TODO_FROM_SAGA, LOAD_TODOS} from "src/store/todos/actionTypes";
import {showNotification} from "src/store/notify/actions";
import {TTodo} from "src/store/todos/types";

function* loadTodos() {
    try {
        const {data} = yield call(axios.get, `${BASE_URL}?_limit=2`);
        yield put(addTodoList(data));
    } catch (e) {
        yield put(showNotification({type: 'error', message:'Error, todos was not loaded'}));
    }
}

function* addTodoToList({payload}: ReturnType<typeof addTodoToSaga>){
    try {
        yield call(axios.post, `${BASE_URL}`, payload);
        yield put(showNotification({ message: 'Todo was added successfully'}));
        yield put(addTodos(<TTodo>payload) );
    } catch{
        yield put(showNotification({type: 'error', message: 'Error, task was not add'}));
    }
}

function* checkTodoSaga({payload}: ReturnType<typeof checkTodoInSaga>) {
    try {
        yield call(axios.put, `${BASE_URL}/${payload}`);
        yield put(showNotification({ message: 'Todo was checked'}));
        yield put(checkTodo(<number>payload));
    } catch {
        yield put(showNotification({type: 'error', message:'Error, todo not checked'}));
    }
}

function* deleteTodoSaga({payload}: ReturnType<typeof checkTodoInSaga>) {
    try {
        yield call(axios.delete, `${BASE_URL}/${payload}`);
        yield put(showNotification({ message: 'Todo was deleted successfully'}));
        yield put(deleteTodo(<number>payload));
    } catch {
        yield put(showNotification({type: 'error', message:'Error, todo not deleted'}));
    }
}

export default function* todosSaga() {
    yield takeEvery(LOAD_TODOS, loadTodos);
    yield takeEvery(ADD_TODO_TO_SAGA, addTodoToList);
    yield takeEvery(CHECK_TODO_IN_SAGA, checkTodoSaga);
    yield takeEvery(DELETE_TODO_FROM_SAGA, deleteTodoSaga);
}
