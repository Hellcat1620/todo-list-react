import React from "react";

const TasksList = () => {
  return (
    <div id="tasks-list" className="main_block__style">
      <div className="tasks-list tasks-list_active">
        <h3>Активные задачи</h3>
        <ul id="task-list_active"></ul>
      </div>
      <div className="tasks-list tasks-list_end">
        <h3>Завершенные задачи</h3>
        <ul id="task-list_end"></ul>
      </div>
    </div>
  );
};

export default TasksList;
