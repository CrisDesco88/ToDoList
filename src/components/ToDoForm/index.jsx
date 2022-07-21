import React from "react";
import './ToDoForm.css';

export const ToDoForm = ({ handleAddTask, handleCatchTask, newTask, handleDeleteAll}) => {

  return (
    <div className="formContainer">
      <form action="" onSubmit={handleAddTask}>
        <input type="text" onChange={handleCatchTask} value={newTask} />
        <button className="addBtn">Agregar</button>
      </form>
      <button className="deleteBtn" onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
};
