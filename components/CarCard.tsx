"use client";

import { CarProps } from "@/types";
import React from "react";
import { useState } from "react";
import CustomButton from "./CustomButton";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return <div className="car-card group"></div>;
};

export default CarCard;
