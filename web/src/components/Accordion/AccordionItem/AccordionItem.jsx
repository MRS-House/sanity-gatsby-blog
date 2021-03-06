import React, { useState, useRef, useEffect } from "react";
import "./accordion-item.scss";
import Chevron from "../../../assets/icons/chevron.svg";

const defaultClasses = {
  content: "accordion-item__content",
  chevron: "accordion-item__chevron",
  titleWrapper: "accordion-item__title-wrapper",
  contentHeight: 0,
};

const AccordionItem = ({ children, title, index, itemOpen, handleSelect }) => {
  const [classes, setClasses] = useState(defaultClasses);
  const content = useRef(null);

  useEffect(() => {
    itemOpen !== index
      ? setClasses(defaultClasses)
      : setClasses({
          content: "accordion-item__content accordion-item__content--active",
          chevron: "accordion-item__chevron accordion-item__chevron--active",
          titleWrapper:
            "accordion-item__title-wrapper accordion-item__title-wrapper--active",
          contentHeight: `${content.current.scrollHeight}`,
        });
  }, [itemOpen, index]);

  return (
    <li className="accordion-item">
      <button
        className={classes.titleWrapper}
        onClick={() => handleSelect(index)}
      >
        <span className="accordion-item__title">
          {title}
          <Chevron className={classes.chevron} />
        </span>
      </button>
      <div
        className={classes.content}
        ref={content}
        style={{ maxHeight: `${classes.contentHeight}px` }}
      >
        <div className="accordion-item__content-wrapper">{children}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
