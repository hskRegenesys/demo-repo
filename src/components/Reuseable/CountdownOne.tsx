import dynamic from "next/dynamic";
import React from "react";

const Countdown = dynamic(() => import("react-countdown"));

const Renderer = (props: any) => {
  const { days, hours, minutes, seconds, completed } = props;
  if (completed) {
    // Render a completed state
    return <h1>Completed</h1>;
  } else {
    // Render a countdown
    return (
      <>
        {days > 0 && (
          <li>
            <span className="days">
              {days}
              <i> Days </i>
            </span>
          </li>
        )}
        <li>
          <span className="hours">
            {hours}
            <i> Hours </i>
          </span>
        </li>
        <li>
          <span className="minutes">
            {minutes}
            <i> Minutes </i>
          </span>
        </li>
        <li>
          <span className="seconds">
            {seconds}
            <i> Seconds </i>
          </span>
        </li>
      </>
    );
  }
};

const CountdownOne = ({ deadlineDate = "", className = "" }) => {
  const today: string = new Date().toDateString();
  const deadLine =
    deadlineDate === "dynamicDate"
      ? new Date(Date.parse(today) + 31 * 24 * 60 * 60 * 1000)
      : deadlineDate === "dynamicHour"
      ? new Date(Date.parse(today) + 24 * 60 * 60 * 1000)
      : deadlineDate;

  return (
    <ul className={`countdown-one__list list-unstyled ${className}`}>
      <Countdown date={deadLine} renderer={Renderer} />
    </ul>
  );
};

export default CountdownOne;
