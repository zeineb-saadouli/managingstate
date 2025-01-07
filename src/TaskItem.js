import React,{useContext, useState} from 'react'
import {TaskContext}  from './TaskContext'

function TaskItem({task}) {
   const {deleteTask, updateTask}=useContext(TaskContext);
   const [editedTaskText, setEditedTaskText]= useState(task.text);
   const [isEditing, setIsEditing]= useState(false);
const handleDelete=()=>{
    deleteTask(task.id)
}
const handleUpDate = () => {
    // Expand this to include editing logic, e.g., opening a form/modal
    const updatedTask = { ...task, name: `${task.name} `, description:`${task.description} ` }; // Example update
    updateTask(updatedTask);
  };
  const handleSave = () => {
    updateTask(task.id,editedTaskText);
    setIsEditing( false );
  };
  const handleChangeName = (e) => {
    setTaskName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setTaskdescription(e.target.value);
  };

  return (
    <div>
    <li>
    {/* test si isEditing true on ajoute le boutton save et le text input pour pouvoir changer le texte de notre tache */}
    {isEditing ? (
      <div>
        <input type="text" value={taskName} onChange={handleChangeName} />
        <input type="text" value={taskDescription} onChange={handleChangeDescription} />
        <button onClick={handleSave}> Save </button>
        <button onClick={handleDelete}> Delete </button> 
      </div>
    ):(
       /*{ Si isEditing est false on a juste l'affichage de la tache avec bouton edit et bouton delete}*/
      <div>
        {task.text}
        <button onClick={handleUpDate}>Edit </button>
        <button onClick={handleDelete}>Delete </button>
      </div>
    )
      
    }
  </li>
    </div>
  )
}

export default TaskItem
