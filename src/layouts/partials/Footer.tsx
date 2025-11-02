"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

// Function to replace {year} this from string to year
function replaceYear(text: string) {
  const year = new Date().getFullYear();

  return text.replace("{year}", year.toString());
}

const { footer_menu, footer_quick_links } = menu;

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: email.split("@")[0], email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to subscribe");
      }

      // Redirect to thank you page on success
      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsSubmitting(false);
    }
  };

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
                    {config.subscription.title && (
                      <h3
                        className="mb-4 text-xl font-normal text-text-dark"
                        dangerouslySetInnerHTML={markdownify(
                          config.subscription.title,
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
                      onSubmit={handleSubscribe}
                      className="flex justify-between rounded-full bg-white px-3 py-2"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="form-input w-full rounded-full border-transparent! bg-transparent py-2 pl-2 placeholder:opacity-100! focus:outline-0"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                      />
                      <button
                        className="rounded-full bg-secondary px-4 py-1 font-medium transition hover:opacity-80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "..." : "Subscribe"}
                      </button>
                    </form>
                    {error && (
                      <p className="mt-3 text-sm text-red-600">
                        {error}
                      </p>
                    )}
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
