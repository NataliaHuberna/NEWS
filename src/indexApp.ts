import {connect} from 'react-redux';
import App from "./App";
import {changeTheme} from "./store/theme/actions";
import {selectTheme} from "./store/theme/selectors";
import {Dispatch} from "redux";
import {ApplicationState} from "src/store/types";
import {loadTodos} from "src/store/todos/actions";

const mapStateToProps = (state: ApplicationState) => ({
    dark: selectTheme(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeTheme: () => dispatch(changeTheme()),
    loadTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
