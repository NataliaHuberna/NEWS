import React from 'react';
import {StNotification} from "./styled";
import {TNotify} from "src/store/notify/types";

type TProps = {
    clearNotification: () => void,
    notify: TNotify
};

const Notification = ({clearNotification, notify}: TProps) => {
    const {type, message} = notify;
    React.useEffect(() => {
        if (type) {
            setTimeout(() => {
                clearNotification();
            }, 2000);}
    }, [type]);
    return type && (<StNotification isSuccess={type}><p> {message} </p></StNotification>);
};

export default Notification;
