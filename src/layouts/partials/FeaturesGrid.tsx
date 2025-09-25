import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection } from "@/types";

const FeaturesGrid = ({
  largeHeading,
  content,
}: {
  largeHeading?: boolean;
  content?: { title?: string; subtitle?: string; description?: string };
}) => {
  let { subtitle, title, description, list } = getListPage(
    "sections/features-grid.md",
  ).frontmatter;

  if (content) {
    ({ title, subtitle, description } = content);
  }
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
                  className="h2 md:h1 mb-6"
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
            <div className="row g-5">
              {list?.map((item: FeatureSection, index: number) =>
                !((index + 1) % 3 === 0) ? (
                  <div
                    key={index}
                    className="md:col-6"
                    data-aos="fade-up-sm"
                    data-aos-delay={index * 150}
                  >
                    <div
                      className={`${(index + 1) % 3 === 0 ? "rounded-s-3xl" : "rounded-3xl"} flex min-h-full flex-col justify-start bg-light p-8`}
                    >
                      {item.title && (
                        <h3
                          className="h4 mb-4"
                          dangerouslySetInnerHTML={markdownify(item.title)}
                        />
                      )}
                      {item.description && (
                        <p
                          className="mb-auto text-lg/[inherit]"
                          dangerouslySetInnerHTML={markdownify(
                            item.description,
                          )}
                        />
                      )}
                      {item.button && item.button.enable && (
                        <a
                          className="btn btn-primary mt-10"
                          href={item.button.link}
                        >
                          {item.button.label}
                          <span className="sr-only">Details</span>
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

                      {item.image && (index + 1) % 3 !== 0 && (
                        <ImageFallback
                          className="mt-10 rounded-3xl custom-shadow-sm"
                          src={item.image}
                          alt={`icon related to ${item.title}`}
                          width={600}
                          height={600}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div key={index} className="col-12" data-aos="fade-up-sm">
                    <div className="rounded-3xl bg-light p-8">
                      <div className="row gx-0 g-5 items-center">
                        <div className="lg:col-4 lg:pe-6">
                          {item.title && (
                            <h3
                              className="h4 mb-4"
                              dangerouslySetInnerHTML={markdownify(item.title)}
                            />
                          )}
                          {item.description && (
                            <p
                              className="text-lg/[inherit]"
                              dangerouslySetInnerHTML={markdownify(
                                item.description,
                              )}
                            />
                          )}
                          {item.button && item.button.enable && (
                            <a
                              className="btn btn-primary mt-10"
                              href={item.button.link}
                            >
                              {item.button.label}
                              <span className="sr-only">Details</span>
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
                        <div className="lg:col-8 lg:ps-6">
                          <ImageFallback
                            className="rounded-3xl custom-shadow-sm"
                            src={item.image}
                            alt={`icon related to ${item.title}`}
                            width={800}
                            height={600}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
