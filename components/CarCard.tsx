"use client";

import { CarProps } from "@/types";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps; // Define the type for the car prop
}

const CarCard = ({ car }: CarCardProps) => {
  // Destructure car properties for easier access
  const { city_mpg, year, make, model, transmission, drive } = car;

  // State to manage the modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Calculate the car rent based on city MPG and year
  const CarRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      {/* Car make and model */}
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      {/* Display the calculated car rent */}
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {CarRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      {/* Car image */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Car details and icons */}
      <div className="relative flex w-full mt-2">
        {/* Group of car detail icons */}
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          {/* Transmission type */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          {/* Drive type */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          {/* City MPG */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        {/* View more button */}
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)} // Open the modal when the button is clicked
          />
        </div>
      </div>

      {/* Car details modal */}
      <CarDetails
        isOpen={isOpen} // Pass the state to show or hide the modal
        closeModal={() => setIsOpen(false)} // Function to close the modal
        car={car} // Pass the car data to the modal
      />
    </div>
  );
};

export default CarCard;
