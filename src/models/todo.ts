class Todo{
    id: string;
    todoText: string;

    constructor(todoText:string){
        this.id = new Date().toISOString();
        this.todoText = todoText;
    }
}
export default Todo