import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection } from "@/types";

const OurTeam = () => {
  const { title, subtitle, description, list } = getListPage(
    "sections/our-team.md",
  ).frontmatter;
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
            data-aos-delay="200"
          >
            <div className="row g-4 justify-center">
              {list?.map((item: FeatureSection, i: number) => (
                <div key={i} className="col-6 lg:col-3">
                  {item.image && (
                    <div className="mb-6 overflow-hidden rounded-xl bg-light text-center md:rounded-3xl">
                      <ImageFallback
                        className="w-full"
                        src={item.image}
                        alt={`photo of ${item.name}`}
                        width={600}
                        height={600}
                      />
                    </div>
                  )}
                  {item.name && (
                    <h3
                      className="h6 mb-1.5"
                      dangerouslySetInnerHTML={markdownify(item.name)}
                    />
                  )}
                  {item.company && (
                    <p dangerouslySetInnerHTML={markdownify(item.company)} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
