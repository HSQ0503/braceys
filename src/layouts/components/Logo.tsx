import config from "@/config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }: { src?: string }) => {
  const {
    logo,
    logo_width,
    logo_height,
    logo_text,
    title,
  }: {
    logo: string;
    logo_width: string;
    logo_height: string;
    logo_text: string;
    title: string;
  } = config.site;

  const logoPath = src ? src : logo;

  return (
    <Link href="/" className="navbar-brand inline-block">
      {logoPath ? (
        <Image
          width={parseInt(logo_width.toString().replace("px", "")) * 2}
          height={parseInt(logo_height.toString().replace("px", "")) * 2}
          src={logoPath}
          alt={title}
          priority
          style={{
            height: logo_height.replace("px", "") + "px",
            width: logo_width.replace("px", "") + "px",
          }}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
