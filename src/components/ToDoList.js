import { useState } from "react"
import ToDoItem from "./ToDoItem"

export default function ToDoList() {

    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean your room' },
        { id: 2, text: 'Go to the gym' },
        { id: 3, text: 'Write some code' },

    ])

    const onTodoInputBlur = (e) => {
        let todo = {
            id: todos.length + 1,
            text: e.target.value
        };
        setTodos (oldTodos => [
            ...oldTodos,
            todo
        ]);
        e.target.value = '';
    }

    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(x=> x.id != id))
    }

    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" onBlur={onTodoInputBlur} name="todo" id="todo-name" />
            <ul>
                {todos.map(x => <ToDoItem key={x.id} id={x.id} text={x.text} onDelete = {deleteTodoItemClickHandler}/>)}
            </ul>
        </>
    )
}