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

    let listItemClasses = ['todo-item'];
    if (todo.isDone) {
        listItemClasses.push('todo-item-toggled')
    }

    return (
        <li onClick={() => onClick(todo.id)} className={listItemClasses.join(' ')}>
            {todo.text}
            <button onClick={(e) => onDelete(e, todo.id)}>X</button>
        </li>
    )
}