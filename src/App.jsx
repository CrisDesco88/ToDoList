import { useState } from "react";
import "./App.css";
import { ToDoBody } from "./components/ToDoBody";
import { ToDoForm } from "./components/ToDoForm";

function App() {

  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('')

  const handleCatchTask = ({target}) => {
    setNewTask(target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if (newTask.trim().length < 1) return;
    setTaskList([newTask, ...taskList])
    setNewTask('')

  }

  const handleDeleteAll = () => {
    setTaskList([])
  }
  

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <ToDoForm
        handleAddTask={handleAddTask}
        handleCatchTask={handleCatchTask}
        handleDeleteAll={handleDeleteAll}
        newTask={newTask}
      /> 
      <ToDoBody taskList={taskList}/>
    </div>
  );
}

export default App;
