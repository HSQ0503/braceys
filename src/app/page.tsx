import CallToAction from "@/partials/CallToAction";
import FeaturesExplanation from "@/partials/FeaturesExplanation";
import SeoMeta from "@/partials/SeoMeta";

const Home = () => {

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
