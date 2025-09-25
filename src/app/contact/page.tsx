import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import ContactHero from "@/partials/ContactHero";
import Faq from "@/partials/Faq";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const Contact = async () => {
  const data: RegularPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;

  const faqData = getListPage("sections/faq.md").frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <ContactHero />
      <CallToAction />
    </>
  );
};

export default Contact;
