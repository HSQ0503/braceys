import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection } from "@/types";

const IntegrationSection = () => {
  const { title, subtitle, description, list } = getListPage(
    "sections/integration.md",
  ).frontmatter;

  const integrationPage =
    typeof window !== "undefined" &&
    window.location.pathname.includes("integration");

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div
            className={`${integrationPage ? "xl:col-9" : "xl:col-7"} mx-auto text-center lg:col-8`}
            data-aos="fade-up-sm"
          >
            {subtitle && (
              <p
                className="mb-2 text-tertiary font-medium"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />
            )}
            {title && !integrationPage && (
              <h2
                className="mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {title && integrationPage && (
              <h1
                className="h2 md:h1 mb-6"
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
            data-aos-delay={200}
          >
            <div className="row g-4 justify-center">
              {list?.map((item: FeatureSection, i: number) => (
                <div className="md:col-6 lg:col-4" key={i}>
                  <div className="group relative min-h-full rounded-xl bg-light px-6 py-12 transition duration-300 hover:-translate-y-1 md:rounded-3xl">
                    {item.button && item.button.enable && (
                      <a
                        className="btn btn-icon absolute top-[8%] right-[8%] !w-14 border-primary/15"
                        href={item.button.link}
                        target={
                          item.button.link.startsWith("http")
                            ? "_blank"
                            : "_self"
                        }
                      >
                        {item.button.label && (
                          <span
                            dangerouslySetInnerHTML={markdownify(
                              item.button.label,
                            )}
                          />
                        )}

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
                    {item.image && (
                      <ImageFallback
                        className="mb-3 w-28"
                        src={item.image}
                        alt={`${item.name}`}
                        width={600}
                        height={600}
                      />
                    )}
                    {item.name && (
                      <h3
                        className="h5 mb-2"
                        dangerouslySetInnerHTML={markdownify(item.name)}
                      />
                    )}
                    {item.description && (
                      <p
                        dangerouslySetInnerHTML={markdownify(item.description)}
                      />
                    )}
                    {item.list && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {item.list.map(
                          (listItem: FeatureSection, i: number) => (
                            <li
                              key={i}
                              className="rounded-md bg-text-dark/10 px-4 py-1"
                              dangerouslySetInnerHTML={markdownify(
                                listItem.toString(),
                              )}
                            />
                          ),
                        )}
                      </ul>
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

export default IntegrationSection;
