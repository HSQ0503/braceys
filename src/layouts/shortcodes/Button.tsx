import Link from "next/link";

const Button = ({
  label,
  link,
  style,
  rel,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel={`noopener noreferrer ${rel ? (rel === "follow" ? "" : rel) : "nofollow"
        }`}
      className={`btn inline-block mb-4 me-4 no-underline px-4  ${style === "outline" ? "btn-outline-primary" : "btn-primary text-white hover:text-text-dark"
        }`}
    >
      {label}
    </Link>
  );
};

export default Button;
