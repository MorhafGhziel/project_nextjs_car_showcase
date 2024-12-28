import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="./Logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2024 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="footer__link">
              <h3 className="font-bold">{footerLink.title}</h3>
              {footerLink.links.map((item) => (
                <Link key={item.title} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
