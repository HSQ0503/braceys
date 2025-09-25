import BlogCard from "@/components/BlogCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection, Post } from "@/types";

let BlogSection = ({
  content,
  largeHeading,
  visiblePosts,
  posts,
  cardLayout,
}: {
  content?: FeatureSection;
  largeHeading?: boolean;
  visiblePosts?: number;
  posts?: Post[];
  cardLayout?: string;
}) => {
  let { subtitle, title, description } =
    getListPage("sections/blog.md").frontmatter;

  // Override default blog data (Title, Subtitle & Description) with props if provided
  if (content) {
    ({ title, subtitle, description } = content);
  }

  // Constant for blog folder path
  const BLOG_FOLDER = "blog";

  // Get all blog posts from the specified folder if no posts are passed as props
  posts = posts ? posts : getSinglePage(BLOG_FOLDER);

  // Sort blog posts by date in descending order
  let sortedPosts = sortByDate(posts);

  // Limit the number of posts to display if specified
  visiblePosts && (sortedPosts = sortedPosts.slice(0, visiblePosts));

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-10" data-aos="fade-up-sm">
            {subtitle && (
              <p
                className="mb-2 font-medium text-tertiary"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />
            )}
            {title &&
              (largeHeading ? (
                <h1
                  className="h2 md:h1 mb-6"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
              ) : (
                <h2
                  className="mb-6"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
              ))}
            {description && (
              <p
                className="text-lg/[inherit]"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
          <div
            className="col-12 pt-20"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="row gx-4 gy-5 justify-center md:gx-5">
              {sortedPosts?.map((blog: Post, i: number) => (
                <div
                  key={i}
                  className={` ${cardLayout === "creative" ? "md:col-6" : "md:col-6 lg:col-4"}`}
                >
                  {blog && <BlogCard cardLayout={cardLayout} content={blog} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
