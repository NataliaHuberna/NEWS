import {connect} from 'react-redux';
import Item from "./Item";
import {checkTodo, deleteTodo} from "src/store/todos/actions";
import {showNotification} from "src/store/notify/actions";
import {Dispatch} from "redux";
import {TNotify} from "src/store/notify/types";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkTodo: (id: number) => dispatch(checkTodo(id)),
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
    showNotification: (payload: TNotify) => dispatch(showNotification(payload))
});

export default connect(null, mapDispatchToProps)(Item);
