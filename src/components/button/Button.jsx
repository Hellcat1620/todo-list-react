import React from "react";
// import classNames from "classnames";

const Button = ({ children, className, onClick, dataModalOpen }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
