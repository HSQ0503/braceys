import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import ContactHeroForm from "./ContactHeroForm";

const ContactHero = () => {
  const { hero } = getListPage("contact/_index.md").frontmatter;

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
          <ContactHeroForm hero={hero} />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
