import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection as TList } from "@/types";

const FeatureSection = () => {
  const { subtitle, title, description, list } = getListPage(
    "sections/features.md",
  ).frontmatter;
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
          <div className="col-12 pt-20">
            {list?.map((item: TList, index: number) => (
              <div
                key={index}
                className={`row gx-0 gy-5 mb-14 items-center last:mb-0 md:mb-28 ${index % 2 !== 0 ? "max-lg:flex-col-reverse" : ""}`}
              >
                <div
                  className={`${index % 2 === 0 ? "" : "md:order-2"} lg:col-6`}
                  data-aos="fade-up-sm"
                  data-aos-delay={100}
                >
                  <div
                    className={`overflow-hidden rounded-3xl bg-light ${index % 2 === 0 ? "pl-14 pt-14" : "px-12 py-14"}`}
                  >
                    {item.image && (
                      <ImageFallback
                        className="rounded-tl-3xl drop-shadow-lg"
                        src={item.image}
                        alt={`icon related to ${item.title}`}
                        width={index % 2 === 0 ? 500 : 400}
                        height={index % 2 === 0 ? 500 : 400}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${index % 2 === 0 ? "lg:ps-20" : "lg:pe-20"} lg:col-6`}
                  data-aos="fade-up-sm"
                  data-aos-delay={300}
                >
                  {item.title && (
                    <h3
                      className="h4 mb-4"
                      dangerouslySetInnerHTML={markdownify(item.title)}
                    />
                  )}
                  {item.description && (
                    <p
                      className="text-lg/[inherit]"
                      dangerouslySetInnerHTML={markdownify(item.description)}
                    />
                  )}

                  {item.bulletpoints_y && (
                    <div className="mt-10 flex flex-col gap-10 sm:flex-row xl:mt-20">
                      {item.bulletpoints_y.map(
                        (
                          point: {
                            icon?: string;
                            title?: string;
                            description?: string;
                          },
                          i: number,
                        ) => (
                          <div key={i}>
                            {point.icon && (
                              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary">
                                <ImageFallback
                                  className="h-6 w-6 object-cover"
                                  src={point.icon}
                                  alt={`icon related to ${point.title}`}
                                  width={24}
                                  height={24}
                                />
                              </div>
                            )}
                            {point.title && (
                              <h3
                                className="h6 mb-2 pt-3"
                                dangerouslySetInnerHTML={markdownify(
                                  point.title,
                                )}
                              />
                            )}
                            {point.description && (
                              <p
                                dangerouslySetInnerHTML={markdownify(
                                  point.description,
                                )}
                              />
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  )}
                  {item.bulletpoints_x && (
                    <ul className="list list-dark mt-10 flex flex-col gap-4">
                      {item.bulletpoints_x.map(
                        (
                          point: { title?: string; description?: string },
                          i: number,
                        ) => (
                          <li key={i}>
                            {point.title && (
                              <h3
                                className="h6 mb-2"
                                dangerouslySetInnerHTML={markdownify(
                                  point.title,
                                )}
                              />
                            )}
                            {point.description && (
                              <p
                                className="text-lg/[inherit]"
                                dangerouslySetInnerHTML={markdownify(
                                  point.description,
                                )}
                              />
                            )}
                          </li>
                        ),
                      )}
                    </ul>
                  )}

                  {item.button && item.button.enable && (
                    <a
                      className="btn btn-primary mt-12"
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
    </section>
  );
};

export default FeatureSection;
