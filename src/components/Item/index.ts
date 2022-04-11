import {connect} from 'react-redux';
import Item from "./Item";
import {checkTodoInSaga, deleteTodoSaga} from "src/store/todos/actions";
import {Dispatch} from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkTodo: (id: number) => dispatch(checkTodoInSaga(id)),
    deleteTodo: (id: number) => dispatch(deleteTodoSaga(id)),
});

export default connect(null, mapDispatchToProps)(Item);
