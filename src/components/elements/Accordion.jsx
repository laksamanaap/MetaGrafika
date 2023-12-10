import React, { useState } from "react";

const Accordion = ({ header, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-primary hover:bg-accent transition duration-300 border-b-2 py-4">
      <div
        className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
          isOpen ? "open" : ""
        }`}
        onClick={toggleAccordion}
      >
        <p className="text-lg text-start font-semibold me-2">{header}</p>
        <svg
          className={`w-5 h-5 transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div
        className={`px-4 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-base font-normal text-start">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
