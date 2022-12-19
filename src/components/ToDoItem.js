// import { useEffect } from "react"
import './ToDoItem.css';

export default function ToDoItem({
    todo,
    onDelete,
    onClick
}) {
    // useEffect(() => {
    //     console.log(`${id} - Mounted`);

    //     return () => {
    //         console.log(`${id} - Unmounted`);
    //     }
    // }, [id]);

    return (
        <li onClick={() => onClick(todo.id)} className={todo.isDone ? 'todo-item' : ''}>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>X</button>
        </li>
    )
}