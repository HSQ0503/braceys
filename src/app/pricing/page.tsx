import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import Clients from "@/partials/Clients";
import Faq from "@/partials/Faq";
import PricingSection from "@/partials/PricingSection";
import SeoMeta from "@/partials/SeoMeta";
import Testimonial from "@/partials/Testimonial";

const page = () => {
  const { title, description, meta_title, image, hero } =
    getListPage("pricing/_index.md").frontmatter;
  const pricingData = getListPage("sections/pricing.md").frontmatter;

  const faqData = getListPage("sections/faq.md").frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PricingSection largeHeading pricingData={pricingData} content={hero} />
      <Clients />
      <Testimonial visible_testimonial={3} />
      <Faq content={faqData} />
      <CallToAction />
    </>
  );
};

export default page;
