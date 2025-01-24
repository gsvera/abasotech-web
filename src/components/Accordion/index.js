import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "./index.scss";
import { useState } from "react";

export const Accordion = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((v) => !v);
  };
  return (
    <div className="accordion">
      <div
        className={`title-accordion ${open && "accordion-selected"}`}
        onClick={handleClick}
      >
        <h3 className="">{title}</h3>
        {open ? <BsChevronUp /> : <BsChevronDown />}
      </div>
      <div className={`text-accordion ${!open && "d-none"}`}>
        <div
          className="t-c-white"
          dangerouslySetInnerHTML={{
            __html: `<p class="t-c-secondary t-size-xs">${text}</p>`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
