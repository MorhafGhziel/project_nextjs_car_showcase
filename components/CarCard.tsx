"use client";

import { CarProps } from "@/types";
import React from "react";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import Image from "next/image";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  // Destructure car properties for easier access.

  const { city_mpg, year, make, model, transmission, drive } = car;

  const CarRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {CarRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manaukl"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
