import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection } from "@/types";

const FeaturesExplanation = ({
  hideHeadingBar,
}: {
  hideHeadingBar?: boolean;
}) => {
  const { subtitle, title, description, list, image } = getListPage(
    "sections/features-explanation.md",
  ).frontmatter;
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {!hideHeadingBar && (
            <div
              className="mx-auto text-center lg:col-10 xl:col-7"
              data-aos="fade-up-sm"
            >
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
          )}
          <div className="col-12 pt-20">
            <div className="relative flex justify-center gap-3 max-xl:flex-wrap xl:mb-12 xl:mt-16 xl:flex-col xl:items-center xl:gap-y-8">
              {/* Features List */}
              {list?.map((item: FeatureSection, mindex: number) => (
                <div
                  key={mindex}
                  className={`order-2 flex gap-x-3 xl:order-0 max-xl:justify-center xl:items-center ${mindex < 1 ? "flex-col max-xl:gap-y-3 md:w-[60%] xl:w-auto xl:flex-row" : "flex-col gap-y-3 sm:flex-row"}`}
                >
                  {/* Main Features List */}
                  {item.row.map((item: FeatureSection, index: number) => (
                    <div
                      key={index}
                      className={`${(index + 1) % 2 === 0 ? "xl:order-3" : "xl:order-1"} xl:max-w-[370px]`}
                    >
                      <div
                        className="mb-12 min-h-full rounded-xl bg-light px-6 py-12 text-center last:mb-0 md:rounded-3xl"
                        data-aos="fade-up-sm"
                        data-aos-delay={index * 100}
                      >
                        {item.title && (
                          <h3
                            className="h6 mb-2"
                            dangerouslySetInnerHTML={markdownify(item.title)}
                          />
                        )}
                        {item.description && (
                          <p
                            dangerouslySetInnerHTML={markdownify(
                              item.description,
                            )}
                          />
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Separator */}
                  <div className="xl:order-2 max-xl:hidden">
                    <ImageFallback
                      className="w-full"
                      src={"/images/features/line.png"}
                      alt="line svg"
                      width={1200}
                      height={1}
                    />
                  </div>
                </div>
              ))}

              {/* Product Image (In Mobile Frame) */}
              {image && (
                <div className="order-1 w-[40%] xl:order-0 sm:w-[30%]">
                  <ImageFallback
                    className="mx-auto xl:absolute xl:left-1/2 xl:top-1/2 xl:w-[35%] xl:-translate-x-1/2 xl:-translate-y-1/2"
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesExplanation;
