import {connect} from 'react-redux';
import List from "./List";
import {selectTodos} from "src/store/todos/selectors";
import {ApplicationState} from "src/store/types";

const mapStateToProps = (state: ApplicationState) => ({
    todos: selectTodos(state)
});

export default connect(mapStateToProps)(List);
