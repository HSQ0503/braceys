"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";

// Function to replace {year} this from string to year
function replaceYear(text: string) {
  const year = new Date().getFullYear();

  return text.replace("{year}", year.toString());
}

const { footer_menu, footer_quick_links } = menu;

const Footer = () => {
  return (
    <footer className="bg-light py-16 xl:py-28">
      <div className="container" data-aos="fade-up-sm">
        <div className="row gy-6 justify-between lg:g-4">
          <div className="sm:col-6 lg:col-4 lg:pe-16">
            <div className="mb-5">
              <Logo />
            </div>
            {config.params.footer_description && (
              <p
                className="mb-2.5 lg:mb-20"
                dangerouslySetInnerHTML={markdownify(
                  config.params.footer_description,
                )}
              />
            )}
            <Social source={social?.main} className="social-icons" />
          </div>
          <div className="sm:col-6 md:col-6 lg:col-4">
            <div className="flex flex-wrap gap-y-6 sm:flex-nowrap md:justify-end lg:justify-around">
              <div className="w-[160px]">
                <h3 className="mb-4 pt-2 text-base text-text-dark md:mb-9">
                  Resources
                </h3>
                <ul className="flex flex-col gap-3">
                  {footer_menu.map((item, i) => (
                    <li key={i}>
                      <a
                        className="font-medium transition hover:text-tertiary"
                        href={item.url}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[160px]">
                <h3 className="mb-4 pt-2 text-base text-text-dark md:mb-9">
                  Quick Info
                </h3>
                <ul className="flex flex-col gap-3">
                  {footer_quick_links.map((item, i) => (
                    <li key={i}>
                      <a
                        className="font-medium transition hover:text-tertiary"
                        href={item.url}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {
            <div className="sm:col-7 md:col-6 lg:col-4">
              {config.subscription &&
                config.subscription.enable &&
                config.subscription.title && (
                  <>
                    {config.subscription.description && (
                      <h3
                        className="mb-4 text-xl font-normal text-text-dark"
                        dangerouslySetInnerHTML={markdownify(
                          config.subscription.description,
                        )}
                      />
                    )}
                    {config.subscription.description && (
                      <p
                        className="mb-6"
                        dangerouslySetInnerHTML={markdownify(
                          config.subscription.description,
                        )}
                      />
                    )}
                    <form
                      action={config.subscription.action}
                      method="post"
                      className="flex justify-between rounded-full bg-white px-3 py-2"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="form-input w-full rounded-full !border-transparent bg-transparent py-2 pl-2 placeholder:!opacity-100 focus:outline-0"
                        required
                      />
                      <button
                        className="rounded-full bg-secondary px-4 py-1 font-medium transition hover:opacity-80 cursor-pointer"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                  </>
                )}
              {config.params.copyright && (
                <div
                  className="mt-5 lg:mt-14"
                  dangerouslySetInnerHTML={markdownify(
                    replaceYear(config.params.copyright),
                  )}
                />
              )}
            </div>
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
