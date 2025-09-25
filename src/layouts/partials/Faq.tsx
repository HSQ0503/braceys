"use client";

import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection } from "@/types";
import { useState } from "react";

interface FaqItem {
  title: string;
  description: string;
  active?: boolean;
}

const Faq = ({ content }: { content: FeatureSection }) => {
  const { title, subtitle, description, list } = content;

  const [activeIndex, setActiveIndex] = useState<number | null>(
    list?.findIndex((item: FaqItem) => item.active) >= 0
      ? list.findIndex((item: FaqItem) => item.active)
      : null
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-10" data-aos="fade-up-sm">
            {subtitle && (
              <p
                className="mb-2 font-medium text-tertiary"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />
            )}
            {title && (
              <h2
                className="mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit]"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
          <div
            className="col-12 pt-20"
            data-aos="fade-up-sm"
            data-aos-delay={100}
          >
            <div className="row g-4 justify-center">
              {list?.map((item: FaqItem, index: number) => (
                <div key={index} className="lg:col-10">
                  <div
                    className={`accordion ${activeIndex === index ? "active" : ""}`}
                  >
                    {item.title && (
                      <button
                        className="accordion-header"
                        aria-label="toggle accordion content"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="text-base">{index + 1}.</span>
                        <span
                          dangerouslySetInnerHTML={markdownify(item.title)}
                        />
                      </button>
                    )}
                    {item.description && (
                      <div
                        className="accordion-content"
                        dangerouslySetInnerHTML={markdownify(item.description)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
