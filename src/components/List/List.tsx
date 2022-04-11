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
                title={el.title}
                key = {el.id}
                id={el.id}
                completed = {el.completed}/>
            )}
        </StDiv>
    );
};

export default List;
