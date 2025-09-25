import { getListPage } from "@/lib/contentParser";
import AboutBanner from "@/partials/AboutBanner";
import CallToAction from "@/partials/CallToAction";
import Clients from "@/partials/Clients";
import Faq from "@/partials/Faq";
import OurTeam from "@/partials/OurTeam";
import OurValues from "@/partials/OurValues";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { title, meta_title, description, image } = data.frontmatter;

  const faqData = getListPage("sections/faq.md").frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <AboutBanner />
      <Clients />
      <OurValues />
      <OurTeam />
      <Faq content={faqData} />
      <CallToAction />
    </>
  );
};

export default About;
