import React from 'react';
import {StItem, StDescription, Button, StInputCheckbox} from "./styled";

type TProps = {
    title: string,
    completed: boolean,
    id: number,
    checkTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
};

const Item: React.FC<TProps> = ({title, completed, id, checkTodo, deleteTodo}) => {
    const changeChecked = () => {
        checkTodo(id);
    };

    const handleDeleteTodo = () => {
        deleteTodo(id);
    };

    return (
        <StItem completed={completed}>
            <StInputCheckbox onChange={changeChecked} type="checkbox" checked={completed}/>
            <StDescription>{title}</StDescription>
            <Button onClick={handleDeleteTodo} className="btn-delete">Delete</Button>
        </StItem>
    );
};

export default Item;
