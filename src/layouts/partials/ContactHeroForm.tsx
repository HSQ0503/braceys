"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface ContactHeroFormProps {
  hero: {
    subtitle?: string;
    title?: string;
    description?: string;
  };
}

const ContactHeroForm = ({ hero }: ContactHeroFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to join waitlist");
      }

      // Redirect to thank you page
      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative pt-24 lg:col-5 lg:pt-16"
      data-aos="fade-left-sm"
      data-aos-delay="200"
    >
      <ImageFallback
        className="absolute left-1/2 top-5 -z-10 w-20 -translate-x-1/2 lg:-top-7"
        src={"/images/logo-icon.svg"}
        alt="hero image"
        loading="eager"
        width={800}
        height={600}
      />
      <div className="rounded-2xl bg-light p-5 md:p-10">
        <form className="row g-4" onSubmit={handleSubmit}>
          {error && (
            <div className="col-12">
              <div className="rounded-lg bg-red-50 p-4 text-red-800">
                {error}
              </div>
            </div>
          )}
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              className="form-input focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              placeholder="Your Full Name"
              required
              type="text"
              disabled={isSubmitting}
            />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              className="form-input focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              placeholder="youremail@email.com"
              required
              type="email"
              disabled={isSubmitting}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-regular bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactHeroForm;

