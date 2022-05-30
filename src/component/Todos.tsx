import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"

const Todos = (props:{items:Todo[], onDeleteItem: (id: string)=>void}) => {
    return(
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem 
                  key={item.id} 
                  todoText={item.todoText} 
                  onDelete={props.onDeleteItem.bind(null, item.id)}
                />
            ))}
        </ul>
    );
}

export default Todos;