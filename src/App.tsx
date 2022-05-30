import React,{useState} from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import Todos from './component/Todos';
import Todo from './models/todo';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]) ;
  const addTodoHandler = (text:string) => {
      // const preTodo = (preData:Todo[])=>{
      //   return [...preData, new Todo(text)]
      // }
      // setTodoList(preTodo);
      const newTodo = new Todo(text);
      setTodoList((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
  };

  const deleteItemHandler = (id: string) => {
    // const todoIndex = todoList.findIndex((item)=>item.id===id);
    // const newTodo = [...todoList];
    // newTodo.splice(todoIndex,1);
    // setTodoList(newTodo);
    setTodoList((prevTodos) => {
      return prevTodos.filter(item => item.id !== id);
    });
  };                  
  return (
    <div >
      <TodoForm onAddTodo={addTodoHandler}/>
      <Todos items={todoList} onDeleteItem={deleteItemHandler}/>
    </div>
  );
}

export default App;
