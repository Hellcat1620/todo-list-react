import React, { useState } from "react";
import Button from "./components/button/Button";
import "./App.css";
import Icons from "./components/icons/Icons";
import avatar from "./img/avatar.svg";
import Categories from "./components/categories/Categories";
import TasksCount from "./components/tasksCount/TasksCount";
import TasksList from "./components/tasksList/TasksList";
import DateAndTime from "./components/date/DateAndTime";
import RandomFact from "./components/randomFact/RandomFact";
import Modal from "./components/modal/Modal";

const App = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  return (
    <div className="wrapper">
      <div className="_wrapper">
        <div className="_container">
          <header className="header">
            <a href="" className="logo_link">
              <Icons name="logo" />
              <h1>
                Блокнот <br /> задач
              </h1>
            </a>
            <Categories open={openModal2} setOpen={setOpenModal2} />
          </header>
          <main className="main">
            <div className="main_header">
              <button
                onClick={() => setOpenModal1(true)}
                className="new-task_btn btn _modal-open"
              >
                <span>&#43;</span>Новая задача
              </button>
              <div className="theme">
                <a href="">&#10029;</a>
              </div>
              <div className="user">
                <span className="user_hello">Привет, username!</span>
                <img className="user_avatar" src={avatar} alt="" />
                <a href="" className="user_menu">
                  &#11167;
                </a>
              </div>
            </div>
            <div className="main_block">
              <div className="tasks">
                <TasksCount />
                <TasksList />
              </div>
              <div className="info">
                <DateAndTime />
                <RandomFact />
                <div className="main_block__style">
                  <h3>График решенных задач</h3>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer className="footer"></footer>
      </div>
      <Modal
        className={openModal1 ? "_active" : ""}
        name="new-task"
        setOpen={setOpenModal1}
      >
        Новая задача
      </Modal>
      <Modal
        className={openModal2 ? "_active" : ""}
        name="new-categori"
        setOpen={setOpenModal2}
      >
        Новая категория
      </Modal>
      <Modal
        className={openModal3 ? "_active" : ""}
        name="update-task"
        setOpen={setOpenModal3}
      >
        Редактирование задачи
      </Modal>
    </div>
  );
};

export default App;
