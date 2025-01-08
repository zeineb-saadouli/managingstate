import React,{useContext, useState} from 'react'
import {TaskContext}  from './TaskContext'

function TaskItem({task}) {
   const {deleteTask, updateTask}=useContext(TaskContext);
   const [isEditing, setIsEditing]= useState(false);
   const[updatedTask,setUpdatedTask]=useState({
    ...task,
    isCompleted: task.isCompleted || false
   });
   //  fonction pour la mise à jour qui met le state isEditing true
   const handleEdit=()=>{
    setIsEditing(true);
   }
   // fonction save qui fait l'appel a la fonction updatetask et remet isediting false
   const handleSave =()=>{
    updateTask(updatedTask);
    setIsEditing(false);
   }

const handleDelete=()=>{
  if(window.confirm( "etes vous certain d'effacer la tache")){
    deleteTask(task.id)}
}

// completion toggle  qui reverse le task  is completed
const handleCompletionToggle=()=>{
  const toggledTask={
    ...updatedTask,
    isCompleted:!updatedTask.isCompleted,
  }//inverser iscompletedtask de updatedTask
  setUpdatedTask(toggledTask);// mettre à jour l'état local
  updateTask(toggledTask);//mettre à jour la tache dans le contexte global
}
  const handleChangeName = (e) => {
    setUpdatedTask({...updatedTask,name:e.target.value});
  };
  const handleChangeDescription = (e) => {
    setUpdatedTask({...updatedTask,description:e.target.value})
  };

  return (
    <div>
    <li>
    {/* test si isEditing true on ajoute le boutton save et le text input pour pouvoir changer le texte de notre tache */}
    {isEditing ? (
      <div>
        <input type="text" value={updatedTask.name} onChange={handleChangeName} />
        <input type="text" value={updatedTask.description} onChange={handleChangeDescription} />
        <button onClick={handleSave}> Save </button>
        <button onClick={handleDelete}> Delete </button> 
      </div>
    ):(
       /*{ Si isEditing est false on a juste l'affichage de la tache avec bouton edit et bouton delete}*/
      <div style={{textDecoration:updatedTask.isCompleted?"line-through":"none"}}>
        {task.name}:{task.description}
        <button onClick={handleEdit}>Edit </button>
        <button onClick={handleDelete}>Delete </button>
        <button onClick={handleCompletionToggle}>{updatedTask.isCompleted?"unmark":"complete"}</button>
      </div>
    )
      
    }
  </li>
    </div>
  )
}

export default TaskItem
