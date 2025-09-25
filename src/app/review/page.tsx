import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonial from "@/partials/Testimonial";

const page = () => {
  const { title, description, meta_title, image, testimonial } =
    getListPage("review/_index.md").frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <Testimonial largeHeading content={testimonial} />
      <CallToAction />
    </>
  );
};

export default page;
