import React from "react";

const Style = ({
  font = "Montserrat, sans-serif",
  bFont = "Montserrat, sans-serif",
  black = "#000000",
  text = "#686a6f",
  base = "#FFE55B",
  baseRgb = "255, 170, 23",
  scrollToTopColor = "var(--thm-black)",
  scrollToTopBg = "var(--thm-base)",
  scrollToTopHoverColor = "#ffffff",
  scrollToTopHoverBg = "var(--thm-black)",
  blackRgb = "",
  gray = "",
}) => {
  return (
    <style global jsx>{`
      :root {
        --thm-font: ${font};
        --thm-b-font: ${bFont};
        --thm-black: ${black};
        --thm-text: ${text};
        --thm-base: ${base};
        --thm-base-rgb: ${baseRgb};
        --thm-black-rgb: ${blackRgb};
        --thm-gray: ${gray};
      }
      .scroll-to-top {
        color: ${scrollToTopColor};
        background-color: ${scrollToTopBg};
      }

      .scroll-to-top:hover {
        background-color: ${scrollToTopHoverBg};
        color: ${scrollToTopHoverColor};
      }
    `}</style>
  );
};

export default Style;
