import React from 'react';
import Todos from "./Todos";

const TodoItem: React.FC<{text: string; onRemoveTodo: (event: React.MouseEvent) => void}> = (props) => {
    return <li onClick={props.onRemoveTodo}>{props.text}</li>
};

export default TodoItem;

