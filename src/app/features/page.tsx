import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import FeatureSection from "@/partials/FeatureSection";
import FeaturesGrid from "@/partials/FeaturesGrid";
import SeoMeta from "@/partials/SeoMeta";

const page = () => {
  const { title, description, meta_title, image, hero } =
    getListPage("features/_index.md").frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <FeaturesGrid content={hero} largeHeading />
      <FeatureSection />
      <CallToAction />
    </>
  );
};

export default page;
