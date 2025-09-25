import { humanize } from "@/lib/utils/textConverter";

const PageHeader = ({
  title,
  lastModified,
}: {
  title: string;
  lastModified?: string;
}) => {
  return (
    <section>
      <div className="container text-center" data-aos="fade-up-sm">
        <div className="rounded-2xl px-8 pt-20">
          <h1
            className="h2 md:h1 mb-4"
            dangerouslySetInnerHTML={{ __html: humanize(title) }}
          />
          {lastModified && (
            <p className="font-medium text-tertiary">
              Updated: {lastModified}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
