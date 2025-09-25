import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const ContactHero = () => {
  const { hero } = getListPage("contact/_index.md").frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="lg:col-7 lg:pe-20 lg:pt-16" data-aos="fade-left-sm">
            {hero.subtitle && (
              <p
                className="mb-2 font-medium text-tertiary"
                dangerouslySetInnerHTML={markdownify(hero.subtitle)}
              />
            )}
            {hero.title && (
              <h2
                className="md:h1 mb-6"
                dangerouslySetInnerHTML={markdownify(hero.title)}
              />
            )}
            {hero.description && (
              <p
                className="text-lg/[inherit]"
                dangerouslySetInnerHTML={markdownify(hero.description)}
              />
            )}
            {hero.list && (
              <div className="mt-10 flex flex-col gap-10 sm:flex-row xl:mt-20">
                {hero.list.map(
                  (
                    point: { icon: string; title: string; description: string },
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
                          className="h6 mb-2 mt-5"
                          dangerouslySetInnerHTML={markdownify(point.title)}
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
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
          <div
            className="relative pt-24 lg:col-5 lg:pt-16"
            data-aos="fade-left-sm"
            data-aos-delay="200"
          >
            <ImageFallback
              className="absolute left-1/2 top-5 -z-10 w-20 -translate-x-1/2 lg:-top-7"
              src={"/images/logo-icon.svg"}
              alt="hero image"
              loading="eager"
              width={800}
              height={600}
            />
            <div className="rounded-2xl bg-light p-5 md:p-10">
              <form
                className="row g-4"
                action={contact_form_action}
                method="POST"
              >
                <div className="col-12">
                  <label htmlFor="name" className="form-label">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                    placeholder="Your Full Name"
                    required
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="youremail@email.com"
                    required
                    type="email"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="comapny-name" className="form-label">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="comapny-name"
                    name="comapny-name"
                    className="form-input"
                    placeholder="Your Company Name"
                    required
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="Your Company Name"
                    required
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Write Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Write Your Message Here"
                    required
                    rows={3}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-regular">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
