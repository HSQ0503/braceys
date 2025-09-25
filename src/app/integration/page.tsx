import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import Faq from "@/partials/Faq";
import IntegrationSection from "@/partials/IntegrationSection";
import SeoMeta from "@/partials/SeoMeta";

const page = () => {
  const { title, meta_title, description, image } = getListPage(
    "integration/_index.md",
  ).frontmatter;
  const faqData = getListPage("sections/faq.md").frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <IntegrationSection />
      <Faq content={faqData} />
      <CallToAction />
    </>
  );
};

export default page;
