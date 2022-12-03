import React from "react";

const Modal = ({ className, name, children, setOpen }) => {
  return (
    <div className={`modal ${className}`}>
      <div className="modal_overlay">
        <div className="modal-body">
          <h3>{children}</h3>
          <button onClick={() => setOpen(false)} className="modal-close">
            &#9587;
          </button>
          <div className="modal-body__flex">
            <input id={`${name}_input`} className="modal_input" type="text" />
            <button id={`${name}_btn`} className={`${name}_btn btn`}>
              <span>&#43;</span>Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
