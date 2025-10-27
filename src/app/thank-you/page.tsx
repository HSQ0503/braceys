import Link from "next/link";
import SeoMeta from "@/partials/SeoMeta";
import DynamicIcon from "@/helpers/DynamicIcon";

const ThankYou = () => {
  return (
    <>
      <SeoMeta
        title="Thank You - Braceys"
        description="Thank you for joining the Braceys waitlist!"
      />
      <section className="section min-h-[60vh] flex items-center">
        <div className="container">
          <div className="row justify-center">
            <div className="md:col-10 lg:col-8 text-center">
              <div className="mb-8" data-aos="fade-up-sm">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-12 w-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h1 className="mb-4 text-h2 lg:text-[3.5rem]">
                  You&apos;re on the list! 🎉
                </h1>
                <p className="mb-6 text-xl text-text lg:text-2xl">
                  Thank you for joining the Braceys waitlist.
                </p>
                <p className="mb-8 text-lg text-text-light">
                  We&apos;ve sent a confirmation email to your inbox. Check your email for more details about what&apos;s coming next!
                </p>
              </div>

              <div
                className="rounded-2xl bg-light p-8 mb-10"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                <h2 className="mb-4 text-2xl font-semibold">What happens next?</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <div className="mb-3 text-4xl">📧</div>
                    <h3 className="mb-2 text-lg font-medium">Check Your Email</h3>
                    <p className="text-sm text-text-light">
                      We&apos;ve sent you a welcome email with more information
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 text-4xl">🚀</div>
                    <h3 className="mb-2 text-lg font-medium">Early Access</h3>
                    <p className="text-sm text-text-light">
                      You&apos;ll be the first to know when we launch
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 text-4xl">🎁</div>
                    <h3 className="mb-2 text-lg font-medium">Special Offers</h3>
                    <p className="text-sm text-text-light">
                      Get exclusive launch offers and updates
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-wrap justify-center gap-4"
                data-aos="fade-up-sm"
                data-aos-delay="200"
              >
                <Link href="/" className="btn btn-primary">
                  Back to Home
                  <span className="icon-wrapper">
                    <span className="icon">
                      <DynamicIcon icon={"FaArrowRight"} />
                    </span>
                    <span className="icon" aria-hidden="true">
                      <DynamicIcon icon={"FaArrowRight"} />
                    </span>
                  </span>
                </Link>
                <Link href="/about" className="btn btn-outline-primary">
                  Learn More About Braceys
                  <span className="icon-wrapper">
                    <span className="icon">
                      <DynamicIcon icon={"FaArrowRight"} />
                    </span>
                    <span className="icon" aria-hidden="true">
                      <DynamicIcon icon={"FaArrowRight"} />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;

