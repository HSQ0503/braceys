import config from "@/config/config.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { plainify } from "@/lib/utils/textConverter";
import { Post } from "@/types";

const BlogCard = ({
  cardLayout,
  content,
}: {
  cardLayout?: string;
  content: Post;
}) => {
  const { summary_length, blog_folder } = config.settings;
  const { title, image, date } = content.frontmatter;

  return (
    <div className="bg-body">
      {image && (
        <div className="relative flex items-center justify-center">
          <ImageFallback
            className={`${cardLayout === "creative" ? "absolute h-[80%] w-[90%] md:h-[70%] md:w-[82%]" : "h-[300px]"} mb-6 rounded-3xl object-cover`}
            src={image}
            alt={title}
            format="webp"
            width={cardLayout === "creative" ? 800 : 400}
            height={cardLayout === "creative" ? 600 : 300}
          />
          {cardLayout === "creative" && (
            <ImageFallback
              className="mb-6 h-[300px] w-full rounded-3xl object-cover md:h-[400px]"
              src="/images/blog-card-bg.png"
              alt={"pattern"}
              format="webp"
              width={800}
              height={600}
            />
          )}
        </div>
      )}
      {date && (
        <div className="mb-4 flex items-center gap-x-2">
          <ImageFallback
            className="w-5"
            src="/images/icons/png/date.png"
            alt="date icon"
            format="webp"
            width={20}
            height={20}
          />
          <p className="inline-block font-medium text-tertiary">
            {dateFormat(date, "iiii, MMM dd, yyyy")}
          </p>
        </div>
      )}
      {title && (
        <h3 className="h5 mb-3">
          <a href={`/${blog_folder}/${content.slug}/`}>{title}</a>
        </h3>
      )}
      {content && (
        <p className="mb-6">
          {plainify(content.content?.slice(0, Number(summary_length)))}
        </p>
      )}
      <a className="btn btn-text" href={`/${blog_folder}/${content.slug}/`}>
        Read More
        <div className="icon-wrapper">
          <span className="icon">
            <DynamicIcon className="w-4" icon={"FaArrowRight"} />
          </span>
          <span className="icon" aria-hidden="true">
            <DynamicIcon className="w-4" icon={"FaArrowRight"} />
          </span>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
