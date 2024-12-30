export async function fetchcars() {
  const headers = {
    "x-rapidapi-key": "9ec58aa9b3mshab1c89d4534f353p191b72jsnadeea3be2111",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
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
