import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { CountUp } from "use-count-up";

const VisibilityCountUp = ({ count = 0 }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible: boolean) => {
    console.log("isVisible ====>", isVisible);
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <VisibilitySensor
      offset={{ top: 10 }}
      delayedCall={true}
      onChange={onVisibilityChange}
    >
      {count > 0 ? (
        <span>
          <CountUp thousandsSeparator={","} isCounting end={count} duration={3.2} />
        </span>
      ) : (
        <div></div>
      )}
    </VisibilitySensor>
  );
};

export default VisibilityCountUp;
