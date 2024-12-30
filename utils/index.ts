export async function fetchcars() {
  const headers = {
    "x-rapidapi-key": "9ec58aa9b3mshab1c89d4534f353p191b72jsnadeea3be2111",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
