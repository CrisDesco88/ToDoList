import React from "react";
import './ToDoBody.css';

export const ToDoBody = ({taskList}) => {
  return (
    <div>
      <ol>
        {taskList.map((task) => {
          return <li key={task + Math.random()}>{task}</li>;
        })}
      </ol>
    </div>
  );
};
