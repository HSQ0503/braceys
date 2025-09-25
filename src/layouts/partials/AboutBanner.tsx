import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const AboutBanner = () => {
  const { title, subtitle, description, left_image, right_image, quote } =
    getListPage("sections/about-banner.md").frontmatter;
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
          <div
            className="col-12 pt-20"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="row g-4 justify-center">
              {left_image && (
                <div className="max-lg:order-last lg:col-6">
                  <ImageFallback
                    className="h-[300px] min-h-full w-full rounded-lg object-cover md:h-[600px] md:rounded-3xl"
                    src={left_image}
                    alt={`image related to ${title}`}
                    width={600}
                    height={600}
                  />
                </div>
              )}
              <div className="max-lg:order-first lg:col-6">
                {right_image && (
                  <ImageFallback
                    className="h-[300px] w-full rounded-lg object-cover object-top md:h-[340px] md:rounded-3xl"
                    src={right_image}
                    alt={`image related to ${title}`}
                    width={600}
                    height={600}
                  />
                )}
                {quote && (
                  <div className="relative mt-10 rounded-lg bg-tertiary p-6 pt-10 text-text-light md:rounded-3xl md:pt-8">
                    <div className="mb-4 flex items-center gap-5">
                      <ImageFallback
                        className="h-16 w-16 object-cover"
                        src={quote.avatar}
                        alt={`avatar related to ${quote.name}`}
                        width={100}
                        height={100}
                      />
                      <div>
                        <h3
                          className="h6 text-inherit"
                          dangerouslySetInnerHTML={markdownify(quote.name)}
                        />
                        <p
                          className="text-inherit"
                          dangerouslySetInnerHTML={markdownify(
                            quote.designation,
                          )}
                        />
                      </div>
                    </div>
                    {quote.content && (
                      <p
                        className="text-lg/[inherit] text-inherit"
                        dangerouslySetInnerHTML={markdownify(quote.content)}
                      />
                    )}

                    <ImageFallback
                      className="pointer-events-none absolute left-1/2 top-6 h-[2px] w-[90%] -translate-x-1/2 object-cover"
                      src="/images/quote-line.png"
                      alt="quote"
                      width={600}
                      height={600}
                    />
                    <ImageFallback
                      className="pointer-events-none absolute -bottom-4 -right-4 h-36 w-40 object-contain"
                      src="/images/quote-bg-shape.png"
                      alt="quote"
                      width={600}
                      height={600}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
