import React from 'react';
import {StDiv} from './styled';
import Item from '../Item';
import {TTodo} from "src/store/todos/types";

type TProps = {
    todos: TTodo[]
};

const List = ({todos}: TProps) => {
    return (
        <StDiv>
            {todos.map((el) => <Item
                taskText={el.value}
                key = {el.id}
                id={el.id}
                checked = {el.checked}/>
            )}
        </StDiv>
    );
};

export default List;
