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
                name="waitlist"
                method="POST"
                data-netlify="true"
                action="/thank-you"
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
                    className="form-input focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                    placeholder="youremail@email.com"
                    required
                    type="email"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-regular bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600">
                    Join Waitlist
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
