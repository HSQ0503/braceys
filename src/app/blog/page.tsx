import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import BlogSection from "@/partials/BlogSection";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
const { blog_folder } = config.settings;

// for all regular pages
const Posts = () => {
  const postIndex = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const headingContent = postIndex.frontmatter.hero;
  const posts = getSinglePage(blog_folder);
  const totalPages: number = Math.ceil(
    posts.length / config.settings.pagination,
  );

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />

      <BlogSection
        largeHeading={true}
        content={headingContent}
        visiblePosts={2}
        cardLayout="creative"
      />
      <BlogSection visiblePosts={3} />
      <Pagination section={blog_folder} totalPages={totalPages} />
      <CallToAction />
    </>
  );
};

export default Posts;
