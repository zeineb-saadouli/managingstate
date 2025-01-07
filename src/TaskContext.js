import React,{createContext,useEffect,useState} from "react";
export const TaskContext=createContext();
export const TaskProvidor=({children})=>{
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
const storedTasks=JSON.parse(localStorage.getItem('tasks'))|| [];
setTasks(storedTasks);
    },[]);
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks]);
    //ajout d'une tache
    const addTask=(task)=> setTasks([...tasks,task]);
    //effacer une tache
    const deleteTask=(id) => setTasks(tasks.filter((task)=>task.id!==id));
    // la mise à jour des taches
    const updateTask=(updatedTask)=> setTasks(tasks.map((task)=>task.id===updatedTask.id?{...updatedTask}:task))  
return(
    <TaskContext.Provider value={{tasks,addTask,deleteTask,updateTask}}>{children}</TaskContext.Provider>
)   
}