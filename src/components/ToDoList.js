import { useState } from "react"
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import ToDoItem from "./ToDoItem"
import { createTodo, deleteTodoId } from '../services/todoService.js'

// http://localhost:3030/jsonstore/MOCK_DATA

const API_URL = 'http://localhost:3030/jsonstore'


export default function ToDoList() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/MOCK_DATA`)
            .then(res => res.json())
            .then(data => {
                setTodos(Object.values(data))
            })
    }, [])

    const onTodoInputBlur = (e) => {
        if (e.target.value === '') {
            return
        }

        let todo = {
            id: uuidv4(),
            text: e.target.value,
            isDone: false,
        };

        createTodo(todo)
            .then(data => {
                setTodos(oldTodos => [
                    ...oldTodos,
                    data
                ]);
                e.target.value = '';
            })
    }

    const deleteTodoItemClickHandler = (e, id) => {
        e.stopPropagation()
        deleteTodoId (id)
        setTodos(oldTodos => oldTodos.filter(x => x.id !== id))
    }

    const isDoneTodoTask = (id) => {
        setTodos(oldTodos => {
            //     let selectedTodoTask = oldTodos.find(x => x.id === id)
            //     let selectedIndex = oldTodos.findIndex(x => x.id === id)
            //     let toggledTodo = { ...selectedTodoTask, isDone: !selectedTodoTask.isDone }

            //     return [
            //         ...oldTodos.slice(0, selectedIndex),
            //         toggledTodo,
            //         ...oldTodos.slice(selectedIndex + 1)
            //     ]

            return oldTodos.map(todo =>
                todo.id === id
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            );
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