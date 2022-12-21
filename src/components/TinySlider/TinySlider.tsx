import React, { forwardRef, useEffect, useState } from "react";
import { tns } from "tiny-slider/src/tiny-slider";

/**
 * @param {{children: ReactNode, options: import("tiny-slider/src/tiny-slider").TinySliderSettings, slider?: import("tiny-slider/src/tiny-slider").TinySliderInstance || null, setSlider?: (slider: import("tiny-slider/src/tiny-slider").TinySliderInstance) => void}} props
 */

const TinySlider = (props) => {
  const [innerSlider, setInnerSlider] = useState(null);
  let { ref, ...rest } = props;
  let { children, options = {}, slider, setSlider } = rest;
  useEffect(() => {
    if (setSlider && slider !== undefined) {
      if (!slider) {
        setSlider(tns(options));
      }
    } else {
      if (!innerSlider) {
        setInnerSlider(tns(options));
      }
    }
  }, [setSlider, slider, innerSlider, ref, options]);

  return (
    <div className={`${options.container?.split(".")[1]} position-relative`}>
      {children}
    </div>
  );
};

export default forwardRef(TinySlider);
