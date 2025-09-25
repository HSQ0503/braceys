import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection } from "@/types";

const ChangelogSection = () => {
  const { subtitle, title, description, list } = getListPage(
    "sections/changelog.md",
  ).frontmatter;

  const changelogPage =
    typeof window !== "undefined" &&
    window.location.pathname.includes("changelog");

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div
            className={`${changelogPage ? "xl:col-8" : "xl:col-7"} mx-auto text-center lg:col-8`}
            data-aos="fade-up-sm"
          >
            {subtitle && (
              <p
                className="mb-2 font-medium text-tertiary"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />
            )}
            {title && !changelogPage && (
              <h2
                className="mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {title && changelogPage && (
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
            className="col-12 mx-auto pt-20"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            {list?.map((item: FeatureSection, i: number) => (
              <div
                key={i}
                className="row gy-5 mb-10 items-start md:g-0 last:mb-0"
              >
                <div className="col-auto mx-auto md:sticky md:top-20">
                  <div
                    className={`relative flex w-52 flex-col justify-start rounded-3xl bg-text-dark px-6 py-5`}
                  >
                    {item.short_title && (
                      <div
                        className="mb-2 text-base leading-relaxed text-white font-medium"
                        dangerouslySetInnerHTML={markdownify(
                          item.short_title,
                          true,
                        )}
                      />
                    )}

                    {item.date && (
                      <p
                        className="mb-24 text-base text-white/30"
                        dangerouslySetInnerHTML={markdownify(item.date)}
                      />
                    )}

                    {item.image && (
                      <ImageFallback
                        className="pointer-events-none absolute -bottom-8 -right-8 select-none"
                        src={item.image}
                        alt={`bg pattern`}
                        width={200}
                        height={200}
                      />
                    )}

                    {item.version && (
                      <p
                        className="rounded-full bg-secondary px-6 py-2 text-center text-lg/[inherit] font-medium"
                        dangerouslySetInnerHTML={markdownify(item.version)}
                      />
                    )}
                  </div>
                </div>
                {item.content && (
                  <div className="md:col-8 lg:col-9">
                    <div
                      className="content prose-p:text-lg/[inherit]"
                      dangerouslySetInnerHTML={markdownify(item.content, true)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangelogSection;
