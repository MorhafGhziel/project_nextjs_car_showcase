import { CarProps } from "@/types";

export async function fetchcars() {
  const headers = {
    "x-rapidapi-key": "9ec58aa9b3mshab1c89d4534f353p191b72jsnadeea3be2111",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
      {
        headers: headers,
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch cars:", response.statusText);
      return []; // Return an empty array if there's an error
    }

    const result = await response.json();

    if (!Array.isArray(result)) {
      console.error("Unexpected data format:", result);
      return []; // Return an empty array if the result is not an array
    }

    return result; // Return the fetched car data
  } catch (error) {
    console.error("Error fetching cars:", error);
    return []; // Return an empty array on error
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/g etimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
