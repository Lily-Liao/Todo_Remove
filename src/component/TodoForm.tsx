import React,{ useRef } from "react";
import classes from './TodoForm.module.css';

const TodoForm =(props: {onAddTodo:(text:string) => void}) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent)=>{
        e.preventDefault();

        const todoText = todoTextInputRef.current!.value;

        if (todoText!.trim().length === 0){
            return
        }
        props.onAddTodo(todoText);
        todoTextInputRef.current!.value='';
    }
    return(
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="textInput">What would you like Todo?</label>
            <input type="text" id="textInput" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
};

export default TodoForm