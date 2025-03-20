import React from "react";
import Image from "next/image";
import Link from "next/link";

// Importing footer links data from constants
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    // Main footer container
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      {/* Top Section */}
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        {/* Logo and Text */}
        <div className="flex flex-col justify-start items-start gap-6">
          {/* Company Logo */}
          <Image
            src="./Logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          {/* Footer description text */}
          <p className="text-base text-gray-700">
            Carhub 2024 <br /> All rights reserved &copy;
          </p>
        </div>

        {/* Footer Links Section */}
        <div className="footer__links">
          {footerLinks.map((footerLink) => (
            // Each footer link category
            <div key={footerLink.title} className="footer__link">
              {/* Footer link category title */}
              <h3 className="font-bold">{footerLink.title}</h3>
              {/* Links under the category */}
              {footerLink.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 hover:text-black hover:scale-105 transition-transform duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        {/* Footer copyright text */}
        <p>@2024 Carhub. All </p>

        {/* Privacy Policy and Terms links */}
        <div className="footer__copyrights-link flex gap-4 ml-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-black hover:scale-105 transition-transform duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-black hover:scale-105 transition-transform duration-300"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
