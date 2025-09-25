import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import Clients from "@/partials/Clients";
import FeatureSection from "@/partials/FeatureSection";
import FeaturesExplanation from "@/partials/FeaturesExplanation";
import FeaturesGrid from "@/partials/FeaturesGrid";
import HowItWorks from "@/partials/HowItWorks";
import PricingSection from "@/partials/PricingSection";
import SeoMeta from "@/partials/SeoMeta";
import Testimonial from "@/partials/Testimonial";

const Home = () => {
  const pricingData = getListPage("sections/pricing.md").frontmatter;

  return (
    <>
      <SeoMeta />
      {/* Home Page Banner Located in `Header.astro` file */}
      <FeaturesExplanation />
      <CallToAction />
    </>
  );
};

export default Home;
