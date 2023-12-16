import React from "react";

const RoundedButton = ({ roundedText }) => {
  return (
    <a href="#" className="link">
      <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        className="link__svg"
        aria-labelledby="link1-title link1-desc"
      >
        <title id="link1-title">{roundedText}</title>

        <path
          id="link-circle"
          className="link__path"
          d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          stroke="none"
          fill="none"
        />

        <path
          className="link__arrow"
          d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
          fill="none"
          stroke="#0583D2"
          strokeWidth="3"
        />

        <text className="link__text">
          <textPath href="#link-circle" stroke="none">
            {roundedText}
          </textPath>
          <rect
            x="0"
            y="80"
            width="200"
            height="40"
            className="link__text-background"
            rx="40"
          />
        </text>
      </svg>
    </a>
  );
};

export default RoundedButton;
