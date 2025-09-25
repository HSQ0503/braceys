"use client";

import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

//  child navigation link interface
export interface IChildNavigationLink {
  name: string;
  url: string;
}

// navigation link interface
export interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}

const BannerSlot = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return pathname === "/" ? <>{children}</> : null;
};

const Header = ({ children }: { children?: React.ReactNode }) => {
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button } = config;
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  // Toggle dropdown menu on mobile
  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    window.scroll(0, 0);

    // Reset active dropdown when route changes
    setActiveDropdown(null);

    const headerHamburgerInit = () => {
      const allPages = document.getElementById("all-pages");
      allPages &&
        allPages.addEventListener("click", () => {
          const menu = document.getElementById("all-pages-dropdown");
          menu && menu.classList.toggle("active");
        });
    };
    headerHamburgerInit();
  }, [pathname]);

  return (
    <div className={`header-wrapper ${pathname === "/" ? "relative" : "pb-6"}`}>
      <header className="header relative">
        <nav className="navbar container relative z-10">
          {/* logo */}
          <div className="order-0 flex items-center">
            <Logo />
          </div>
          {/* navbar toggler */}
          <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            htmlFor="nav-toggle"
            className="order-3 flex cursor-pointer items-center text-text-dark lg:order-1 lg:hidden"
          >
            <svg
              id="show-button"
              className="block h-6 fill-current"
              viewBox="0 0 20 20"
            >
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
            </svg>
            <svg
              id="hide-button"
              className="hidden h-6 fill-current"
              viewBox="0 0 20 20"
            >
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              ></polygon>
            </svg>
          </label>
          {/* /navbar toggler */}
          <ul
            id="nav-menu"
            className="navbar-nav order-3 hidden pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
          >
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li id={menu.hasChildren ? "all-pages" : undefined} className="nav-item nav-dropdown group relative">
                    <span
                      onClick={() => toggleDropdown(i)}
                      className={`nav-link inline-flex items-center ${menu.children
                        ?.map(({ url }) => url)
                        .includes(pathname) ||
                        menu.children
                          ?.map(({ url }) => `${url}/`)
                          .includes(pathname)
                        ? "active"
                        : ""
                        }`}
                    >
                      {menu.name}
                      <span className="arrow-icon">
                        <svg
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </span>
                    <ul className={`nav-dropdown-list lg:invisible lg:absolute lg:translate-y-1 lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:visible lg:group-hover:block lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ${activeDropdown === i ? 'block' : 'max-lg:hidden'}`}>
                      {menu.children?.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <a
                            href={child.url}
                            aria-label={child.name}
                            className={`nav-dropdown-link block ${(pathname === `${child.url}/` ||
                              pathname === child.url) &&
                              "active"
                              }`}
                          >
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      className={`nav-link block ${(pathname === `${menu.url}/` ||
                        pathname === menu.url) &&
                        "active"
                        }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            {navigation_button.enable && (
              <Link
                className="btn btn-dark mt-2 lg:hidden"
                href={navigation_button.link}
                target={
                  navigation_button.link.startsWith("http") ? "_blank" : "_self"
                }
                rel={
                  navigation_button.link.startsWith("http")
                    ? "noopener noreferrer"
                    : ""
                }
              >
                {navigation_button.label}
                <span className="icon-wrapper">
                  <span className="icon">
                    <DynamicIcon icon={"FaArrowRight"} />
                  </span>
                  <span className="icon" aria-hidden="true">
                    <DynamicIcon icon={"FaArrowRight"} />
                  </span>
                </span>
              </Link>
            )}
          </ul>
          <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
            {navigation_button.enable && (
              <Link
                className="btn btn-dark hidden lg:flex"
                href={navigation_button.link}
                target={
                  navigation_button.link.startsWith("http") ? "_blank" : "_self"
                }
                rel={
                  navigation_button.link.startsWith("http")
                    ? "noopener noreferrer"
                    : ""
                }
              >
                {navigation_button.label}
                <span className="icon-wrapper">
                  <span className="icon">
                    <DynamicIcon icon={"FaArrowRight"} />
                  </span>
                  <span className="icon" aria-hidden="true">
                    <DynamicIcon icon={"FaArrowRight"} />
                  </span>
                </span>
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Show Only In Home Page */}
      <BannerSlot>{children}</BannerSlot>

      <div aria-hidden="true">
        <ImageFallback
          className="pointer-events-none absolute top-0 -z-10 h-full w-full object-cover object-top"
          src={
            pathname === "/"
              ? "/images/banner-bg.png"
              : "/images/page-header.png"
          }
          alt="header image"
          format="webp"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default Header;
