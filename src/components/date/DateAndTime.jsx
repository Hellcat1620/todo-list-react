import React, { useState } from "react";
import Icons from "../icons/Icons";
import useInterval from "../../customHooks/useInterval";

const CurrentTime = () => {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  useInterval(() => {
    setTime((time = new Date().toLocaleTimeString()));
  }, 1000);

  return <>{time}</>;
};

const DateAndTime = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="main_block__style">
      <h3>Сегодня</h3>
      <div className="info_date__wrapper">
        <div className="info_date">
          <Icons name="date" />
          <span id="info_date">{currentDate}</span>
        </div>
        <div className="info_time">
          <Icons name="time" />
          <span id="info_time">
            <CurrentTime />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DateAndTime;
