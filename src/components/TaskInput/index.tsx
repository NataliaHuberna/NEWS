import {connect} from 'react-redux';
import {addTodos} from "src/store/todos/actions";
import TaskInput from "./TaskInput";
import {Dispatch} from "redux";
import {TTodo} from "src/store/todos/types";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodos: (newTask: TTodo) => dispatch(addTodos(newTask))
});

export default connect(null, mapDispatchToProps)(TaskInput);
