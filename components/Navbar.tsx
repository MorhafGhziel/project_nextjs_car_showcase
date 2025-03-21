import React from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    // Header container for the navigation bar
    <header className="w-full absolute z-10">
      {/* Navigation bar */}
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        {/* Logo linking to the homepage */}
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="./Logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        {/* Sign-In button */}
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] hover:bg-gray-100 duration-300"
        />
      </nav>
    </header>
  );
};

export default Navbar;
