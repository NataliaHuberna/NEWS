import React from 'react';
import {StItem, StDescription, Button, StInputCheckbox} from "./styled";
import {TNotify} from "src/store/notify/types";

type TProps = {
    taskText: string,
    checked: boolean,
    id: number,
    checkTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
    showNotification: (notify: TNotify) => void
};

const Item: React.FC<TProps> = ({taskText, checked, id, checkTodo, deleteTodo, showNotification}) => {
    const changeChecked = () => {
        checkTodo(id);
        showNotification({message: 'Todo was checked'});
    };

    const handleDeleteTodo = () => {
        deleteTodo(id);
        showNotification({message: 'Todo was deleted'});
    };

    return (
        <StItem checked={checked}>
            <StInputCheckbox onChange={changeChecked} type="checkbox" checked={checked}/>
            <StDescription>{taskText}</StDescription>
            <Button onClick={handleDeleteTodo} className="btn-delete">Delete</Button>
        </StItem>
    );
};
    
export default Item;
