import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const Clients = () => {
  const clients = getListPage("sections/clients.md");
  const { title, list } = clients.frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up-sm">
            <div className="text-center sm:flex">
              <p
                className="w-full pb-3 text-center font-medium tracking-wide sm:whitespace-nowrap sm:pb-0 text-lg"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            </div>
          </div>
          <div
            className="col-12 pt-10"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="flex justify-center gap-x-12 gap-y-6 grayscale opacity-50 max-lg:flex-wrap">
              {list?.map((logo: string, i: number) => (
                <div
                  key={i}
                  className="flex aspect-[3.125_/_1] w-36 items-center"
                >
                  <ImageFallback
                    src={logo}
                    alt="brand logo"
                    height="120"
                    width="120"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
