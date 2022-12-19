import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import ToDoItem from "./ToDoItem"

export default function ToDoList() {

    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean your room', isDone: false },
        { id: 2, text: 'Go to the gym', isDone: false },
        { id: 3, text: 'Write some code', isDone: false },

    ])

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uuidv4(),
            text: e.target.value,
            isDone: false,
        };
        setTodos(oldTodos => [
            ...oldTodos,
            todo
        ]);
        e.target.value = '';
    }

    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(x => x.id !== id))
    }

    const isDoneTodoTask = (id) => {
        setTodos(oldTodos => {
            let selectedTodoTask = oldTodos.find(x => x.id === id)
            let selectedIndex = oldTodos.findIndex(x => x.id === id)
            let toggledTodo = { ...selectedTodoTask, isDone: !selectedTodoTask.isDone }

            return [
                ...oldTodos.slice(0, selectedIndex),
                toggledTodo,
                ...oldTodos.slice(selectedIndex + 1)
            ]
        })
    }

    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" onBlur={onTodoInputBlur} name="todo" id="todo-name" />
            <ul>
                {todos.map(todo =>
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodoItemClickHandler}
                        onClick={isDoneTodoTask}
                    />)}
            </ul>
        </>
    )
}