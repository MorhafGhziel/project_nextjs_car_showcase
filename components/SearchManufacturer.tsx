"use client";

import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";

const SearchManufacturer = ({
  manufacturer, // Current selected manufacturer
  setManufacturer, // Function to update the selected manufacturer
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState(""); // State to handle the search query

  return (
    <div className="search-manufacturer">
      {/* Combobox for selecting a manufacturer */}
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          {/* Combobox button with an image */}
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg" // Icon for the dropdown
              alt="Car Logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          {/* Input field for filtering manufacturers */}
          <Combobox.Input
            className="search-manufacturer__input" // Custom input styles
            placeholder="Volkswagen" // Default placeholder text
            displayValue={(manufacturer: string) => manufacturer} // Displays the selected value
            onChange={(e) => setQuery(e.target.value)} // Updates the query state on input change
          />

          {/* Transition for dropdown animation */}
          <Transition
            as={Fragment} // Wraps multiple children without adding extra DOM nodes
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterEnter={() => setQuery("")}
          >
            {/* Dropdown menu could go here */}
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
