import React, {useEffect, useRef} from 'react';
import {StDiv, StButton, StInput} from "./styled";
import {TTodo} from "src/store/todos/types";

type TProps = {
    addTodos: (task: TTodo) => void
};

const TaskInput: React.FC<TProps> = ({addTodos}) => {
    const addTask = (task: string) => {
        const newTask = {title: task, id: Date.now(), completed: false};
        addTodos(newTask);
    };

    const inputRef = useRef(null);
    const[input, setInput] = React.useState('');
    useEffect(() => inputRef.current.focus(), []);

    const addTaskToList = () => {
        if (input.trim()) {
            addTask(input);
            setInput( '');
        }
    };

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {if (event.key === 'Enter') addTaskToList();};
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value );

    return (
        <StDiv>
            <StInput
                ref={inputRef}
                onKeyPress={handleEnter}
                onChange={inputChange}
                value={input}
                placeholder="Add new task..."
            />
            <StButton disabled={!input.trim()} onClick={addTaskToList}>
                ADD
            </StButton>
        </StDiv>
    );
};

export default TaskInput;
