import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";
function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskdescription] = useState("");
  const { addTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName === "" || taskDescription === "") {
      alert("il faut remplir les champs");
    } else {
      addTask({ id: Date.now(), name: taskName, description: taskDescription });
      setTaskName("");
      setTaskdescription("");
    }
  };
  const handleChangeName = (e) => {
    setTaskName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setTaskdescription(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          placeholder="entrer un nom"
          onChange={handleChangeName}
        />
        <input
          type="text"
          value={taskDescription}
          placeholder="entrer une description"
          onChange={handleChangeDescription}
        />
        <button type="submit">add task</button>
      </form>
    </div>
  );
}

export default TaskForm;
