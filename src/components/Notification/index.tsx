import {connect} from 'react-redux';
import Notification from "./Notification";
import {clearNotification} from "src/store/notify/actions";
import {selectNotify} from "src/store/notify/selectors";
import {ApplicationState} from "src/store/types";
import {Dispatch} from "redux";

const mapStateToProps = (state: ApplicationState) => ({
    notify: selectNotify(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearNotification: () => dispatch(clearNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
