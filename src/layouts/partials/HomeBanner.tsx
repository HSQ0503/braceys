import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const HomeBanner = () => {
  const { title, description, buttons, images } = getListPage(
    "sections/home-banner.md",
  ).frontmatter;

  return (
    <section className="pb-0 pt-16">
      <div className="container">
        <div className="row justify-center">
          <div className="mb-8 text-center md:col-9 lg:col-11">
            {title && (
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
                className="mb-4 text-h2 lg:text-[4rem] xl:text-[5rem]"
              />
            )}
            {description && (
              <p
                dangerouslySetInnerHTML={markdownify(description)}
                data-aos="fade-up-sm"
                className="mb-8 text-xl lg:text-2xl xl:text-3xl"
              />
            )}
            {buttons && (
              <ul className="flex flex-wrap justify-center gap-4">
                {buttons.map(
                  (
                    { label, link }: { label: string; link: string },
                    index: number,
                  ) => (
                    <li
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + index * 50}
                    >
                      <a
                        className={`${index === 0 ? "btn-primary" : "btn-outline-primary"} btn `}
                        href={link}
                        target={link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener"
                      >
                        {label}
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
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>
          {images && images[0] && (
            <div
              className="col-12 mt-8 lg:mt-12"
              data-aos="fade-up-sm"
              data-aos-delay="200"
            >
              <div className="relative overflow-hidden" style={{ height: '300px' }}>
                <ImageFallback
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover object-top"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
