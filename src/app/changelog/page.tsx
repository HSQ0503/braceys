import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import ChangelogSection from "@/partials/ChangelogSection";
import FeaturesExplanation from "@/partials/FeaturesExplanation";
import SeoMeta from "@/partials/SeoMeta";

const page = () => {
  const { title, meta_title, description, image } =
    getListPage("features/_index.md").frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <ChangelogSection />
      <FeaturesExplanation hideHeadingBar />
      <CallToAction />
    </>
  );
};

export default page;
