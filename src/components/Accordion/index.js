"use client";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "./index.scss";
import { useEffect, useMemo, useState } from "react";

export const Accordion = ({ id, title, text, showAnwser, handleShow }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const idShowAnswer = useMemo(() => id === showAnwser, [id, showAnwser]);

  if (!isClient) return null;

  const handleClick = () => {
    handleShow?.(id);
  };
  return (
    <div className="accordion">
      <div
        className={`title-accordion ${idShowAnswer && "accordion-selected"}`}
        onClick={handleClick}
      >
        <h3 className="">{title}</h3>
        {idShowAnswer ? <BsChevronUp /> : <BsChevronDown />}
      </div>
      <div
        className={`text-accordion ${
          idShowAnswer && "text-accordion-selected"
        }`}
      >
        <div
          className="t-c-white"
          dangerouslySetInnerHTML={{
            __html: `<p class="t-c-secondary t-size-xs t-line-height-s">${text}</p>`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
