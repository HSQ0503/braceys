import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, markdownify, plainify } from "@/lib/utils/textConverter";
import BlogSection from "./BlogSection";
import CallToAction from "./CallToAction";
import { Post } from "@/types";

const BlogSingle = ({ post }: { post: Post }) => {
  const { title, date, image, author } = post.frontmatter;

  const authorList = getSinglePage("authors");
  const postAuthor =
    authorList && authorList.filter((a) => a.frontmatter.title === author)[0];

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center">
          <div className="text-center lg:col-9" data-aos="fade-up-sm">
            {title && (
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                className="h2 mb-4"
              />
            )}
            {post.content && (
              <p className="mb-6 text-lg">
                {plainify(post.content?.slice(0, 190))}
              </p>
            )}
            <ul className="mb-4 flex items-center justify-center gap-4">
              <li className="text-lg/[inherit]">
                <span className="flex gap-2 font-medium">
                  <ImageFallback
                    className="h-8 w-8"
                    src={postAuthor.frontmatter.image}
                    alt={postAuthor.frontmatter.title}
                    fallback="/images/placeholder.png"
                    width={32}
                    height={32}
                  />
                  {humanize(postAuthor.frontmatter.title)}
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <ImageFallback
                  className="h-8 w-8"
                  src="/images/icons/png/date.png"
                  alt="date icon"
                  fallback="/images/placeholder.png"
                  width={32}
                  height={32}
                />
                <p className="inline-block font-medium text-tertiary">
                  {dateFormat(date, "iiii, MMM dd, yyyy")}
                </p>
              </li>
            </ul>
          </div>
          <div
            className="col-12 pt-20 md:pt-32"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            {image && (
              <div className="mb-10">
                <ImageFallback
                  src={image}
                  height={500}
                  width={1200}
                  alt={title}
                  className="h-auto w-full rounded-3xl object-cover md:h-[700px]"
                />
              </div>
            )}
          </div>
          <article className="pb-10 lg:col-8" data-aos="fade-up-sm">
            <div className="content">
              <MDXContent content={post.content} />
            </div>
          </article>
        </div>
      </div>

      {/* Related posts  */}
      <BlogSection visiblePosts={3} />
      <CallToAction />
    </section>
  );
};

export default BlogSingle;
