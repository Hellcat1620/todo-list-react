import React from "react";

const Categories = ({ setOpen }) => {
  return (
    <div className="categories">
      <h3>Категории</h3>
      <ul className="categories-menu">
        <li className="categories-item">
          <a href="#" className="categories-link">
            Дом
          </a>
        </li>
        <li className="categories-item">
          <a href="#" className="categories-link">
            Работа
          </a>
        </li>
        <li className="categories-item">
          <a href="#" className="categories-link">
            Семья
          </a>
        </li>
        <button
          className="add-categori_btn btn _modal-open"
          onClick={() => setOpen(true)}
        >
          <span>&#43;</span>Добавить
        </button>
      </ul>
    </div>
  );
};

export default Categories;
