import React from "react";
import classes from './TodoItem.module.css';

const TodoItem = (props: {todoText: string, onDelete:() => void}) => {
    return (
        <li className={classes.item} onClick={props.onDelete}>{props.todoText}</li>
    );
};

export default TodoItem;