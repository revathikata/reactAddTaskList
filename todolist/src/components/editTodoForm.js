import React,{useState} from 'react'

export const EditTodoForm = ({editTodo, task}) =>{
    const [value, setValue] = useState(task.task)
    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value, task.id);
        setValue("")
    }
    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
           <input type='text' className='inputcls' placeholder='update task  ' value={value} onChange=
           {(e) => setValue(e.target.value)}/>
           <button type='submit' className='todo-btn'>Update</button>
        </form>
    )
}
export default EditTodoForm