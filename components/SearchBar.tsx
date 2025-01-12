"use client";

import React from "react";

import { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";

import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  <button className={`-ml-3 z-10`} type="submit">
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>;
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image src="/model-icon.png" alt="car model " />
      </div>
    </form>
  );
};

export default SearchBar;
