import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { TestimonialSection } from "@/types";

const Testimonial = ({
  visible_testimonial,
  largeHeading,
  content,
}: {
  visible_testimonial?: number;
  largeHeading?: boolean;
  content?: TestimonialSection;
}) => {
  let {
    title,
    subtitle,
    description,
    list: originalList,
  } = getListPage("sections/testimonial.md").frontmatter;

  const list = visible_testimonial
    ? originalList?.slice(0, visible_testimonial)
    : originalList;

  // Override default blog data (Title, Subtitle & Description) with props if provided
  if (content) {
    ({ title, subtitle, description } = content);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div
            className="mx-auto text-center lg:col-8 xl:col-9"
            data-aos="fade-up-sm"
          >
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
          <div
            className="col-12 pt-20"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="row g-4 justify-center">
              {list?.map((item: TestimonialSection, i: number) => (
                <div key={i} className="md:col-6 lg:col-4">
                  <div className="flex min-h-full flex-col justify-start gap-8 rounded-xl bg-light p-6 md:rounded-3xl">
                    <div className="flex justify-start gap-x-2">
                      <DynamicIcon
                        icon="FaStar"
                        className="text-yellow-500 text-2xl"
                      />
                      <DynamicIcon
                        icon="FaStar"
                        className="text-yellow-500 text-2xl"
                      />
                      <DynamicIcon
                        icon="FaStar"
                        className="text-yellow-500 text-2xl"
                      />
                      <DynamicIcon
                        icon="FaStar"
                        className="text-yellow-500 text-2xl"
                      />
                      <DynamicIcon
                        icon="FaStar"
                        className="text-yellow-500 text-2xl"
                      />
                    </div>
                    {item.content && (
                      <div
                        className="content prose-strong:text-xl"
                        dangerouslySetInnerHTML={markdownify(
                          item.content,
                          true,
                        )}
                      />
                    )}
                    <div className="flex flex-col gap-4 sm:flex-row">
                      {item.avatar && (
                        <div className="flex h-16 w-16 items-center overflow-hidden rounded-full">
                          <ImageFallback
                            className="h-full w-full object-cover"
                            src={item.avatar}
                            alt={`avatar of the ${item.name}`}
                            width={60}
                            height={60}
                          />
                        </div>
                      )}
                      <div>
                        {item.name && (
                          <strong
                            className="mb-2 text-lg/[inherit] font-medium"
                            dangerouslySetInnerHTML={markdownify(item.name)}
                          />
                        )}
                        {item.designation && (
                          <p
                            dangerouslySetInnerHTML={markdownify(
                              item.designation,
                            )}
                          />
                        )}
                      </div>
                    </div>
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

export default Testimonial;
