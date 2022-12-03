import React from "react";

const TasksCount = () => {
  return (
    <div className="main_block__style tasks_count">
      <h3>Успехи за последние 7 дней</h3>
      <div className="tasks_count-list">
        <div className="count_item">
          <span className="count_item-title">Создано</span>
          <div className="count_circle">
            <span className="count_num">100</span>
            задач
          </div>
        </div>
        <div className="count_item">
          <span className="count_item-title">Завершено</span>
          <div className="count_circle">
            <span className="count_num">90</span>
            задач
          </div>
        </div>
        <div className="count_item">
          <span className="count_item-title">Удалено</span>
          <div className="count_circle">
            <span className="count_num">6</span>
            задач
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksCount;
