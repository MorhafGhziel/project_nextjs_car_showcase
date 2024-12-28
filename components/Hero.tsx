"use client"; // Enables client-side rendering for this component.

import React from "react"; // Import React library.
import CustomButton from "./CustomButton"; // Import a custom button component.
import Image from "next/image"; // Import Next.js optimized image component.

const Hero = () => {
  // Function to handle scrolling behavior when the button is clicked.
  const handleScroll = () => {
    // Logic to scroll to a specific section can be added here, e.g.,:
    // window.scrollTo({ top: targetSectionOffset, behavior: "smooth" });
    console.log("Scroll triggered!"); // Placeholder action for now.
  };

  return (
    <div className="hero">
      {/* Text Section */}
      <div className="flex-1 pt-36 padding-x">
        {/* Hero Title */}
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily!
        </h1>

        {/* Hero Subtitle */}
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        {/* Button to explore cars */}
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      {/* Image Section */}
      <div className="hero__image-container">
        {/* Hero Image */}
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        {/* Overlay for styling */}
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero; // Exporting the component to use in other parts of the project.
