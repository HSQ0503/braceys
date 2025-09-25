import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CallToAction = () => {
  const { enable, title, description, image, button } = getListPage(
    "sections/call-to-action.md",
  ).frontmatter;

  return (
    <>
      {enable && (
        <section className="section mb-14">
          <div className="container">
            <div className="bg-text-dark px-10 py-16 xl:p-20 rounded-[40px] relative overflow-hidden">
              <div
                className="absolute !top-1/2 !-translate-y-1/2 !left-1/2 !-translate-x-1/2 rotate-[7.83deg] pointer-events-none"
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <ImageFallback
                  className=" h-[641px] w-auto "
                  src={image}
                  alt="cta-image"
                  width={641}
                  height={641}
                />
              </div>
              <div className="row items-center justify-center">
                <div className="lg:col-8 text-center">
                  <h2
                    dangerouslySetInnerHTML={markdownify(title)}
                    className="text-text-light mb-4"
                    data-aos="fade-up-sm"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(description)}
                    className="text-text-light text-lg/[inherit] mb-6"
                    data-aos="fade-up-sm"
                    data-aos-delay="50"
                  />
                  {button.enable && (
                    <a
                      className="btn btn-primary-light relative"
                      href={button.link}
                      target={
                        button.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel="noopener"
                      data-aos="fade-up-sm"
                      data-aos-delay="200"
                    >
                      {button.label}
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
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
