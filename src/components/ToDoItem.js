export default function ToDoItem({
    id,
    text,
    onDelete
}) {
    return <li> {text} <button onClick={() => onDelete(id)}>X</button></li>
}