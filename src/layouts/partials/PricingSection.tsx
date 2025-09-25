"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection, PricingSection as TPricingData } from "@/types";
import { useEffect, useRef, useState } from "react";

const PricingSection = ({
  largeHeading,
  pricingData,
  content,
}: {
  largeHeading?: boolean;
  pricingData: TPricingData;
  content?: FeatureSection;
}) => {
  let { subtitle, title, description, plans, plans_labels } = pricingData;
  const [isYearly, setIsYearly] = useState(false);
  const priceRefs = useRef<Map<number, HTMLSpanElement>>(new Map());

  // Override default blog data (Title, Subtitle & Description) with props if provided
  if (content) {
    ({ title, subtitle, description } = content);
  }

  const animateCounter = (element: HTMLElement, endValue: number) => {
    let startValue = 0;
    const duration = 250;
    let startTime: number | null = null;

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const value =
        Math.min(progress / duration, 1) * (endValue - startValue) + startValue;
      element.innerHTML = Math.ceil(value).toString();
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsYearly(e.target.checked);
  };

  useEffect(() => {
    // Update pricing displays when isYearly changes
    document.querySelectorAll<HTMLElement>(".data-count").forEach((number) => {
      const dataAttribute = isYearly
        ? "data-count-yearly"
        : "data-count-monthly";
      const priceValue = number.getAttribute(dataAttribute);

      if (priceValue) {
        number.innerHTML = priceValue;
        animateCounter(number, parseInt(priceValue, 10));
      }
    });

    // Toggle visibility of monthly/yearly descriptions
    document
      .querySelectorAll<HTMLElement>(".text-monthly")
      .forEach((element) => {
        element.classList.toggle("hidden", isYearly);
        element.classList.toggle("block", !isYearly);
      });

    document
      .querySelectorAll<HTMLElement>(".text-yearly")
      .forEach((element) => {
        element.classList.toggle("hidden", !isYearly);
        element.classList.toggle("block", isYearly);
      });
  }, [isYearly]);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-8" data-aos="fade-up-sm">
            {subtitle && (
              <p
                className="mb-2 font-medium text-tertiary"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />
            )}
            {title &&
              (largeHeading ? (
                <h1
                  className="h2 mb-6"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
              ) : (
                <h2
                  className="mb-6"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
              ))}
            {description && (
              <p
                className="text-lg/[inherit]"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>

          <div className="col-12 pt-20">
            <div className="row gx-2">
              <div
                className="col-12 pb-10"
                data-aos="fade-up-sm"
                data-aos-delay="200"
              >
                <div className="flex items-center justify-center gap-x-3">
                  {plans_labels?.map((plan: string, index: number) => (
                    <span
                      key={index}
                      className={`select-none font-medium ${index === 0 ? "order-0" : "order-3"}`}
                      dangerouslySetInnerHTML={markdownify(plan)}
                    />
                  ))}
                  <label className="relative inline-block h-8 w-16 cursor-pointer order-1 rounded-full bg-text-dark/10">
                    <span className="sr-only">Pricing Switcher</span>
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="pricing-check peer w-full cursor-pointer opacity-0"
                      checked={isYearly}
                      onChange={handleToggleChange}
                    />
                    <span className="absolute left-0 top-0 cursor-pointer before:absolute before:left-1 before:top-1 before:h-6 before:w-6 before:translate-x-0 before:rounded-full before:bg-tertiary before:transition-all before:delay-75 before:duration-300 peer-checked:before:translate-x-8"></span>
                  </label>
                </div>
              </div>

              {plans?.map((item: TPricingData, index: number) => (
                <div
                  key={index}
                  className="md:col-6"
                  data-aos="fade-up-sm"
                  data-aos-delay={200 + index * 150}
                >
                  <div
                    className={`${(index + 1) % 2 === 0 ? "has-dark-bg bg-text-dark text-text-light" : "bg-light"} group mb-12 flex min-h-full flex-col items-start gap-8 rounded-xl px-8 py-12 last:mb-0 md:gap-12 md:rounded-3xl md:px-11`}
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      {item.title && (
                        <h3 className="counter h5 group-[.has-dark-bg]:text-text-light">
                          <span
                            dangerouslySetInnerHTML={markdownify(item.title)}
                          />
                        </h3>
                      )}
                      {item.badge?.enable && (
                        <span
                          className="rounded-full bg-secondary px-5 py-1.5 font-medium text-text-dark"
                          dangerouslySetInnerHTML={markdownify(
                            item.badge.label,
                          )}
                        />
                      )}
                    </div>

                    {item.description && (
                      <p
                        className="text-lg/[inherit]"
                        dangerouslySetInnerHTML={markdownify(item.description)}
                      />
                    )}

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      {item.price_monthly && item.price_yearly && (
                        <strong className="h2 group-[.has-dark-bg]:text-text-light">
                          <span
                            dangerouslySetInnerHTML={markdownify(
                              item.price_prefix,
                            )}
                          />
                          <span
                            className="data-count"
                            data-count-yearly={item.price_yearly}
                            data-count-monthly={item.price_monthly}
                            ref={(el) => {
                              if (el) priceRefs.current.set(index, el);
                            }}
                            dangerouslySetInnerHTML={markdownify(
                              isYearly ? item.price_yearly : item.price_monthly,
                            )}
                          />
                        </strong>
                      )}

                      {item.price_description_monthly &&
                        item.price_description_yearly && (
                          <>
                            <span
                              className={`text-monthly text-lg/[inherit] group-[.has-dark-bg]:text-text-light ${isYearly ? "hidden" : "block"}`}
                              dangerouslySetInnerHTML={markdownify(
                                item.price_description_monthly,
                              )}
                            />
                            <span
                              className={`text-yearly text-lg/[inherit] group-[.has-dark-bg]:text-text-light ${isYearly ? "block" : "hidden"}`}
                              dangerouslySetInnerHTML={markdownify(
                                item.price_description_yearly,
                              )}
                            />
                          </>
                        )}
                    </div>

                    {item.features && (
                      <ul className="list list-tertiary">
                        {item.features.map((feature: string, i: number) => (
                          <li
                            key={i}
                            className="mb-2 text-lg/[inherit]"
                            dangerouslySetInnerHTML={markdownify(feature)}
                          />
                        ))}
                      </ul>
                    )}

                    {item.button && item.button.enable && (
                      <a
                        className={`${(index + 1) % 2 === 0 ? "btn-light hover:bg-slate-600" : "btn-dark"} btn`}
                        href={item.button.link}
                      >
                        {item.button.label}
                        <span className="icon-wrapper">
                          <span className="icon">
                            <DynamicIcon icon={"FaArrowRight"} />
                          </span>
                          <span className="icon" aria-hidden="true">
                            <DynamicIcon icon={"FaArrowRight"} />
                          </span>
                        </span>
                      </a>
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

export default PricingSection;
