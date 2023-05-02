import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const VisibilityCountUp = ({ count = 0 }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible: boolean) => {
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
      {count ? `${count}+` : `0`}
    </VisibilitySensor>
  );
};

export default VisibilityCountUp;
