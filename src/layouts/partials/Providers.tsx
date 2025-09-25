"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
    });
  }, []);

  return children;
};

export default Providers;
