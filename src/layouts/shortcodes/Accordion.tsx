"use client";

import { markdownify } from "@/lib/utils/textConverter";
import React, { useState } from "react";

const Accordion = ({
  title,
  index = 0,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  index?: number;
}) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={`accordion mb-4 last:mb-0 ${activeIndex === index ? "active" : ""} ${className}`}
    >
      {title && (
        <button
          className="accordion-header"
          aria-label="toggle accordion content"
          onClick={() => toggleAccordion(index)}
        >
          <span className="text-base">{String(index).padStart(2, "0")}.</span>
          <span
            dangerouslySetInnerHTML={markdownify(title)}
          />
        </button>
      )}
      {children && (
        <div className="accordion-content">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
