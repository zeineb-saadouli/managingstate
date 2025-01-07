import React, { useContext } from 'react'
import {TaskContext } from './TaskContext'
import TaskItem  from "./TaskItem";
function TaskList () {
    const {tasks}=useContext(TaskContext);
  return (
    <div>
      <ul>
        {tasks.map((task)=>(
            <TaskItem task={task} key={task.id}/>
        ))
        }
      </ul>
    </div>
  )
}

export default TaskList
