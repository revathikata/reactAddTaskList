import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task,toggleComplete, deleteTodo,editTodo}) => {
    return(
         <div className='todo'>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed':''}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon />
                <FontAwesomeIcon className='editIcon' icon = {faPenSquare} onClick={() =>editTodo(task.id)}/>
                <FontAwesomeIcon className='deleteIcon' icon = {faTrash} onClick ={() => deleteTodo(task.id)}/>
            </div>
         </div>
    )
}
export default Todo